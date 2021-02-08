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
import tsImage from "../assets/image/typescript.png";

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
    flexWrap: "wrap",
    backgroundColor: "#E4E4E4",
    height: "100vh",
    width: "100vh",
  },
  image: {
    height: 200,
    margin: "0 auto",
    width: 200,
  },
  section: {
    width: "100%",
    backgroundColor: "red",
    margin: 10,
    padding: 10,
    fontSize: 12,
  },
  text: {
    display: "block",
    width: "100%",
    height: 200,
    backgroundColor: "yellow",
  },
});

const PdfViewer = ({ posts }) => {
  return (
    <Document title='Nepali text' author='text' subject='test'>
      <Page size='A4' style={styles.page}>
        {posts.map((data) => {
          return (
            <>
              <View style={styles.section}>
                <Text>
                  सत्तापक्षबाटै प्रदेशसभा अवरुद्ध मुख्यमन्त्री शेरधन राईविरुद्ध
                  अविश्वासको प्रस्ताव पेस गर्ने कार्यसूची बनाएर आइतबार बोलाइएको
                  प्रदेश १ सभाको बैठक सत्तापक्षले नै अवरुद्ध गरेको छ । सभामुख
                  प्रदीपकुमार भण्डारीले प्रदेशसभा बैठक प्रारम्भ भएको घोषणा गर्न
                  नपाउँदै मुख्यमन्त्री राई पक्षधर सांसदहरूले उठेर अवरुद्ध गरेका
                  थिए । अवरोधपछि बैठक कार्यसूचीमा प्रवेश नै नभई फागुन ९ सम्म
                  स्थगन गरिएको छ ।
                </Text>
              </View>
              <Image style={styles.image} src={tsImage} />
              <View style={styles.section}>
                <Text>{data.title}</Text>
              </View>
              <View style={styles.section}>
                <Text>{data.body}</Text>
              </View>
            </>
          );
        })}
      </Page>
    </Document>
  );
};

export default PdfViewer;
