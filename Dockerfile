## BASE ##
FROM node:20.7.0-alpine as base

RUN apk update
RUN apk add --no-cache bash
RUN apk add --update npm
RUN npm install -g npm@10.2.0

WORKDIR /opt/app
#----------------------------------------------------------------

## DEVELOPMENT ##
FROM base as development

# Cannot exist in the production layer
COPY package.json package-lock.json ./

RUN npm install

COPY . .

VOLUME /opt/app/src
#----------------------------------------------------------------

## BUILDER ##
FROM base as builder

COPY package.json package-lock.json ./

# RUN apk add --no-cache libc6-compat
RUN npm install --production
COPY . .

RUN npm run build
#----------------------------------------------------------------
#   # Finished step build
#   This can be added to the test pipeline in the build process.    
#   
#   ## About
#   To ensure a successful build, it's crucial to differentiate between the building and execution stages. 
#   The Runner plays a pivotal role in this distinction, as it dictates how the entire process should be executed. 
#   During the building phase, it's highly recommended to conduct thorough testing to identify and eliminate any potential errors. 
#   For the build to be executed seamlessly, it should be conducted in a temporary environment on Docker. 
#   
#   ## Example
#   Defines the target in the build command.
#   - development  
#   `docker build -t mmgis_article_dev:0.0.1v --target development .`
#   
#   - builder   
#   `docker build -t mmgis_article_pkg:0.0.1v --target builder .`
#   
#   - production    
#   (The last clause of "from" to default target .)
#   `docker build -t mmgis_article:0.0.1v .`
#------------------------Production-----------------------------
## RUNNER ##
FROM base as runner
SHELL ["/bin/sh", "-c"]

# dumb-init occupies PID 1 and takes care of all the responsibilities.
# RUN apk add dumb-init

ENV NODE_ENV production

RUN mkdir -p /etc/skel/

RUN echo 'history -c \
/bin/rm -f /opt/remote/.mysql_history \
/bin/rm -f /opt/remote/.history \
/bin/rm -f /opt/remote/.bash_history' >> /etc/skel/.logout

RUN echo 'set autologout = 30 \
set prompt = "$ " \
set history = 0 \
set ignoreeof' >> /etc/skel/.cshrc

RUN cp /etc/skel/.cshrc /etc/skel/.profile

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

RUN chown -R nextjs:nodejs /opt/app
USER nextjs

COPY --from=builder /opt/app/public ./public
COPY --from=builder /opt/app/.next/standalone ./
COPY --from=builder /opt/app/.next/static ./.next/static

EXPOSE 3000

COPY entrypoint-init.sh entrypoint-init.sh

ENTRYPOINT ["./entrypoint-init.sh"]