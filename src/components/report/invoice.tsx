import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import { IPedido } from "@/interface/IProduto";
import { CurrencyNumber } from "@/utils/CurrencyNumber";

// Create styles
const styles = StyleSheet.create({
  page: {
    display: "flex",
    flexDirection: "column",
    padding: 20,
  },
  flexBetween: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  flexColumn: {
    flexDirection: "column",
    width: "100%",
  },
  textRight: {
    textAlign: "right",
  },
  section: {
    margin: 10,
    flexGrow: 1,
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 15,
    width: "100%",
    maxWidth: 300,
  },
  containerClient: {
    marginTop: 30,
    backgroundColor: "#93c5fd",
    border: "3px solid #222",
    padding: 5,
  },
  subtitle: {
    fontSize: 18,
    textAlign: "center",
  },
  description: {
    fontSize: 12
  },
  headerItem: {
    marginVertical: 5,
    borderBottom: "3px solid #222",
    padding: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 22,
  },
  cartItem: {
    marginVertical: 0,
    borderBottom: "1px solid #222",
    padding: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 15,
  },
  containerTotal: {
    marginVertical: 15,
    borderTop: "3px solid #222",
    padding: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

// Create Document Component
export const InvoiceDocument = ({ name, total, carrinho, obs }: IPedido) => {
  const date = new Date();

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.flexBetween}>
          <View style={styles.flexColumn}>
            <Image
              src={
                "https://raw.githubusercontent.com/andresinho20049/LHV-emporio/pdf/public/Logo.png"
              }
              source={
                "https://raw.githubusercontent.com/andresinho20049/LHV-emporio/pdf/public/Logo.png"
              }
            />
          </View>
          <View style={styles.flexColumn}>
            <Text style={styles.textRight}>Invoice #: {date.getTime()}</Text>
            <Text style={styles.textRight}>Data: {date.toLocaleDateString('pt-BR')}</Text>
          </View>
        </View>
        <View style={styles.section}>
          <View style={styles.flexBetween}>
            <View style={styles.flexColumn}>
              <Text>Rua Santa Maria n° 193</Text>
              <Text>Jd. Santo Antônio | Embu</Text>
              <Text>São Paulo</Text>
            </View>
            <View style={styles.flexColumn}>
              <Text style={styles.textRight}>Empório LHV.</Text>
              <Text style={styles.textRight}>@emporiolhv</Text>
              <Text style={styles.textRight}>+55 (11) 99691-0147</Text>
            </View>
          </View>
          <View style={styles.containerClient}>
            <Text style={styles.subtitle}>{name}</Text>
            <Text style={styles.description}>{obs}</Text>
          </View>
          <View style={styles.headerItem}>
            <Text>Item</Text>
            <Text>Preço</Text>
          </View>
          {carrinho.map((item, idx) => (
            <View key={idx} style={styles.cartItem}>
              <Text>{item.produto.name}</Text>
              <Text>
                {CurrencyNumber.format(item.produto.value * item.qtd)}
              </Text>
            </View>
          ))}
        </View>
        <View style={styles.containerTotal}>
          <Text style={styles.subtitle}>Total:</Text>
          <Text style={styles.subtitle}>{CurrencyNumber.format(total)}</Text>
        </View>
      </Page>
    </Document>
  );
};
