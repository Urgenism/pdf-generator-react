import React, { useEffect, useState } from "react";
import {
  Page,
  Text,
  Font,
  Image,
  View,
  Document,
  StyleSheet,
} from "@react-pdf/renderer";
import Mangal from "../assets/fonts/Mangal-Regular.ttf";

Font.register({
  family: "Mangal Regular",
  src: Mangal,
});
// Create styles
const styles = StyleSheet.create({
  page: {
    fontFamily: "Mangal Regular",
    display: "flex",
    flexDirection: "row",
    padding: 10,
    flexWrap: "wrap",
    lineHeight: 1.4,
    backgroundColor: "#fff",
  },
  section: {
    width: "100%",
    textAlign: "center",
    fontSize: 12,
  },
  sectionSmall: {
    fontSize: 10,
    textAlign: "center",
  },
  grid: {
    marginTop: 40,
    paddingHorizontal: 20,
    fontSize: 12,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  gridLeft: {
    width: "70%",
  },
  gridRight: {
    width: "30%",
  },
  list: {
    marginTop: 15,
    fontSize: 12,
  },

  listItem: {},
});

const PdfViewer = () => {
  return (
    <Document title='Nepali text' author='text' subject='test'>
      <Page size='A4' style={styles.page}>
        <View style={styles.section}>
          <Text>अनुसुची - १७</Text>
          <Text>स्थानीय तहमा समायोजन भएको तीन वर्ष</Text>
        </View>
        <View style={styles.sectionSmall}>
          <Text>जिविसमा कार्यरत</Text>
          <Text> कार्यालय प्रयोजनका लाग</Text>
          <Text>ल्यापटप स्थानीय तहमा</Text>
        </View>
        <View style={styles.section}>
          <Text>समायोजन भएको ३</Text>
          <Text>............................</Text>
          <Text style={{ textDecoration: "underline" }}>
            कर्मचारीले कार्यालयको
          </Text>
        </View>
        <View style={styles.grid}>
          <View style={styles.gridLeft}>
            <Text>शाखा अधिकृत {"-"}</Text>
          </View>
          <View style={styles.gridRight}>
            <Text>मिति {":-"}</Text>
          </View>
        </View>
        <View style={styles.list}>
          <Text>1. कार्यालय प्रयोजनका लाग</Text>
          <Text>2. कार्यालय प्रयोजनका लाग</Text>
          <Text>3. कार्यालय प्रयोजनका लाग</Text>
          <Text>4. कार्यालय प्रयोजनका लाग</Text>
          <Text>
            7. कार्यालय प्रयोजनका लाग{":-"} ................लाग............लाग{" "}
          </Text>
          <Text>
            8. कार्यालय प्रयोजनका{":-"} ................लाग............लाग{" "}
          </Text>
          <Text>5. कार्यालय प्रयोजनका लाग</Text>
          <Text>6. कार्यालय प्रयोजनका लाग</Text>
        </View>
        <View style={styles.grid}>
          <View style={styles.gridLeft}>
            <Text>...............</Text>
            <Text>भुजिलिनको हस्ताक्षर</Text>
          </View>
          <View style={styles.gridRight}>
            <Text>.................... </Text>
            <Text>भुजिलिनको हस्ताक्षर</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default PdfViewer;
