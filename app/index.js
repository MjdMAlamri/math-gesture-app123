import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
const COLORS = {
  navy: "#0C2A5B",
  navyDark: "#0A1E42",
  white: "#FFFFFF",
  offWhite: "#F6F7FB",
  text: "#0F172A",
  subtext: "#475569",
  primary: "#2563EB",
  primaryLight: "#E6EEFF",
  badge: "#FFE56A",
  chip: "#E7F0FF",
  border: "#E5E7EB",
  linkBlue: "#2B6DE8",
};
export default function App() {
  
  const TEAM = [
    {
      first: "Besmelh",
      last: "Alshalaan",
      avatar: "https://github.com/MjdMAlamri/Images/raw/refs/heads/main/Besmelh",
      linkedin: "https://www.linkedin.com/in/besmelh-alshaalan/",
    },
    {
      first: "Shaykha",
      last: "Almaani",
      avatar: "https://github.com/MjdMAlamri/Images/raw/refs/heads/main/We",
      linkedin: "https://www.linkedin.com/in/shaykha-almaani/",
    },
    {
      first: "Rasheed",
      last: "Alghamdi",
      avatar: "https://github.com/MjdMAlamri/Images/raw/refs/heads/main/Rasheed",
      linkedin: "https://www.linkedin.com/in/rasheedmg/",
    },
    {
      first: "Fai",
      last: "Alradhi",
      avatar: "https://github.com/MjdMAlamri/Images/raw/refs/heads/main/We",
      linkedin: "https://www.linkedin.com/in/fai-alradhi-caie™-080b66228/",
    },
    {
      first: "Mohammad",
      last: "Alsarrah",
      avatar: "https://github.com/MjdMAlamri/Images/raw/refs/heads/main/Mohammed",
      linkedin: "https://www.linkedin.com/in/mohammed-alsarrah/",
    },
    {
      first: "Mjd",
      last: "Alamri",
      avatar: "https://github.com/MjdMAlamri/Images/raw/refs/heads/main/We",
      linkedin: "https://www.linkedin.com/in/mjd-alamri-pnu/",
    },
  ];

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 48 }}>
      {/* ===== Top banner (unchanged) ===== */}
      <View style={styles.header}>
        <Image
          source={{ uri: "https://companieslogo.com/img/orig/ACN_BIG.D-871a76ce.png?t=1720244490" }}
          style={styles.logo}
        />
        <View style={styles.navButtons}>
          {["Home", "Registration", "Logout"].map((btn, i) => (
            <TouchableOpacity key={i} style={styles.navBtn} activeOpacity={0.9}>
              <Text style={styles.navText}>{btn}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <Image
          source={{ uri: "https://github.com/MjdMAlamri/Images/raw/refs/heads/main/FullLogo" }}
          style={styles.topLogo}
        />
      </View>

      {/* ===== HERO (blue panel fully covering section) ===== */}
      <View style={styles.heroPanel}>
        {/* Fill the panel with gradient */}
        <LinearGradient
          colors={["#0B1440", "#0D246A"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={StyleSheet.absoluteFillObject}
        />

        {/* Decorative arcs */}
        <View pointerEvents="none" style={[styles.heroArc, styles.heroArcLeft]} />
        <View pointerEvents="none" style={[styles.heroArc, styles.heroArcRight]} />
        <View pointerEvents="none" style={[styles.heroArcThin, styles.heroArcBottom]} />

        {/* Content row: headline (left) + image (right) */}
        <View style={styles.heroRow}>
          <View style={styles.heroLeft}>
            <Text style={styles.heroBrand}>EdVenture</Text>
            <Text style={styles.heroTagline}>
              Making education fun, engaging, and trackable
            </Text>
          </View>

          {/* Replace this image URI with your own mock/art */}
          <Image
            source={{
              uri:
                "https://images.unsplash.com/photo-1758685734343-491353d96a81?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            }}
            style={styles.heroArt}
          />
        </View>

        {/* Cards bar INSIDE the blue panel (edges align with headline) */}
        <View style={styles.featureBarInside}>
          <View style={[styles.featureItem, styles.featureItemDivider]}>
            <Text style={styles.featureTitle}>Fun</Text>
            <Text style={styles.featureText}>
              Math becomes play through interactive games powered by gesture and
              hand-drawing recognition, keeping students motivated and excited.
            </Text>
          </View>

          <View style={[styles.featureItem, styles.featureItemDivider]}>
            <Text style={styles.featureTitle}>Engaging</Text>
            <Text style={styles.featureText}>
              Learners interact by drawing and gesturing, making abstract math
              concepts hands-on, immersive, and easy to grasp.
            </Text>
          </View>

          <View style={styles.featureItem}>
            <Text style={styles.featureTitle}>Trackable</Text>
            <Text style={styles.featureText}>
              Teachers track performance in real time, while students review past
              equations and measure their own progress.
            </Text>
          </View>
        </View>
      </View>

      {/* ===== Problem / Solution (unchanged) ===== */}
      <View style={styles.sectionWrap}>
        <View pointerEvents="none" style={styles.shapeSquareSm} />
        <View pointerEvents="none" style={styles.shapeSquareLg} />
        <Text pointerEvents="none" style={styles.shapeQuoteLeft}>”</Text>

        <View style={styles.row}>
          <View style={styles.colText}>
            <Text style={styles.sectionTitle}>Problem Statement</Text>
            <Text style={styles.sectionText}>
              Traditional math learning relies heavily on textbooks and lectures, making the
              subject feel abstract and repetitive. This often leads to low engagement and
              reduced motivation among students. At the same time, teachers struggle to track
              individual progress, leaving gaps in understanding unnoticed and unaddressed.
            </Text>
          </View>
          <Image
            source={{ uri: "https://images.pexels.com/photos/249360/pexels-photo-249360.jpeg" }}
            style={styles.bigImage}
          />
        </View>

        <View style={[styles.row, { marginTop: 56, alignItems: "flex-start" }]}>
          <View style={styles.solLeft}>
            <Image
              source={{ uri: "https://images.pexels.com/photos/4144091/pexels-photo-4144091.jpeg" }}
              style={[styles.cardWide, { marginBottom: 22 }]}
            />
            <Image
              source={{ uri: "https://images.pexels.com/photos/5905445/pexels-photo-5905445.jpeg" }}
              style={styles.cardWide}
            />
          </View>

          <View style={styles.solRight}>
            <Image
              source={{ uri: "https://images.pexels.com/photos/5905705/pexels-photo-5905705.jpeg" }}
              style={[styles.cardTall, { marginBottom: 22 }]}
            />
            <Image
              source={{ uri: "https://images.pexels.com/photos/4144094/pexels-photo-4144094.jpeg" }}
              style={styles.cardTall}
            />
          </View>

          <View style={styles.solCopy}>
            <Text style={styles.sectionTitle}>Solution</Text>
            <Text style={styles.sectionText}>
              With EdVenture Math learning {"\n"}becomes fun, engaging, {"\n"}personalized, and trackable.
              {"\n"}Interactive games transform practice {"\n"}into play, while real-time feedback keeps
              students motivated. Lessons adapt to each student’s level, and progress is easy
              to monitor and review, making every step of learning visible and meaningful.
            </Text>
          </View>
        </View>

        <Text pointerEvents="none" style={styles.shapeQuoteRight}>”</Text>
      </View>

      {/* ===== Team (unchanged) ===== */}
      <LinearGradient colors={["#1a1f4a", "#0b0d2b"]} style={styles.teamSection}>
        <Text style={[styles.sectionTitle, { textAlign: "center", marginBottom: 22 }]}>
          Team Members
        </Text>

        <View style={styles.teamGrid}>
          {TEAM.map((m, i) => (
            <View key={i} style={styles.memberBox}>
              <Image source={{ uri: m.avatar }} style={styles.avatar} />
              <Text style={styles.nameFirst}>{m.first}</Text>
              <Text style={styles.nameLast}>{m.last}</Text>

              <TouchableOpacity
                style={styles.linkedinBtn}
                onPress={() => Linking.openURL(m.linkedin)}
                activeOpacity={0.85}
              >
                <Text style={styles.linkedinText}>LinkedIn</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </LinearGradient>

      {/* ===== Demo (unchanged) ===== */}
      <View style={styles.demoWrap}>
        <View style={styles.demoCard}>
          <Image
            source={{
              uri:
                "https://images.unsplash.com/photo-1557682250-33bd709cbe85?q=80&w=1600&auto=format&fit=crop",
            }}
            style={styles.demoBg}
            blurRadius={30}
          />
          <LinearGradient
            colors={["rgba(0,0,0,0.35)", "rgba(0,0,0,0.55)"]}
            style={styles.demoVignette}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          />
          <Text style={styles.demoHeading}>Experience It Yourself – Try the Demo</Text>
          <TouchableOpacity style={styles.demoButton} activeOpacity={0.9}>
            <Text style={styles.demoButtonText}>Try the Demo Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const CARD_BG = "rgba(255,255,255,0.06)";

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0b0d2b" },

  /* ===== Top banner (unchanged) ===== */
  header: {
    height: 72,
    backgroundColor: "#14183A",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255,255,255,0.06)",
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  logo: {
    width: 120,
    height: 40,
    resizeMode: "contain",
    position: "absolute",
    left: 16,
    top: "50%",
    marginTop: -20,
  },
  topLogo: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    position: "absolute",
    right: 16,
    top: "50%",
    marginTop: -75,
  },
  navButtons: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 16,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  navBtn: {
    backgroundColor: COLORS.navy,
    marginHorizontal: 6,
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 999,
  },
  navText: { color: "#fff", fontSize: 12, fontWeight: "700" },

  /* ===== NEW HERO that fully covers the section ===== */
  heroPanel: {
    overflow: "hidden",
    paddingBottom: 28,
  },
  heroArc: {
    position: "absolute",
    width: 560,
    height: 560,
    borderRadius: 280,
    borderWidth: 2,
    borderColor: "rgba(255,255,255,0.08)",
  },
  heroArcThin: {
    position: "absolute",
    width: 720,
    height: 720,
    borderRadius: 360,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.06)",
  },
  heroArcLeft: { left: -320, top: -220 },
  heroArcRight: { right: -320, top: -280 },
  heroArcBottom: { right: 40, top: -440 },

  // inner row: headline + image (same width as cards)
  heroRow: {
    maxWidth: 1100,
    alignSelf: "center",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 24,
    paddingHorizontal: 24,
  },
  heroLeft: { flex: 1 },
  heroBrand: {
    color: "#FFFFFF",
    fontSize: 34,
    fontWeight: "800",
  },
  heroTagline: {
    color: "#E6E8F2",
    marginTop: 10,
    fontSize: 18,
    lineHeight: 26,
    opacity: 0.95,
  },
  // space reserved for your art/mockup
  heroArt: {
    width: 420,
    height: 260,
    borderRadius: 22,
    marginTop:20,
    backgroundColor: "rgba(255,255,255,0.06)",
    resizeMode: "cover",
  },

  // cards bar INSIDE the blue panel so it never sticks out
  featureBarInside: {
    maxWidth: 1100,
    alignSelf: "center",
    width: "100%",
    marginTop: 24,
    paddingVertical: 18,
    paddingHorizontal: 18,
    borderRadius: 28,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "rgba(255,255,255,0.06)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.12)",
    shadowColor: "#000",
    shadowOpacity: 0.18,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 10 },
    elevation: 8,
  },
  featureItem: { flex: 1, paddingHorizontal: 14, alignItems: "center" },
  featureItemDivider: {
    borderRightWidth: 1,
    borderRightColor: "rgba(255,255,255,0.12)",
  },
  featureTitle: {
    color: "#FFFFFF",
    fontWeight: "800",
    fontSize: 18,
    marginBottom: 8,
    textAlign: "center",
  },
  featureText: {
    color: "#D8DBEA",
    fontSize: 13.5,
    lineHeight: 20,
    textAlign: "center",
  },

  /* ===== Rest unchanged ===== */
  sectionWrap: { position: "relative", paddingHorizontal: 24, paddingVertical: 56 },
  row: {
    maxWidth: 1100,
    alignSelf: "center",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 32,
  },
  colText: { flexBasis: "52%" },
  sectionTitle: { color: "#fff", fontSize: 26, fontWeight: "800", marginBottom: 14 },
  sectionText: { color: "#DDE2F1", fontSize: 16, lineHeight: 26 },
  bigImage: {
    flexBasis: "40%",
    height: 220,
    borderRadius: 16,
    backgroundColor: "#101632",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 10 },
    elevation: 8,
  },

  solLeft: { flexBasis: "48%" },
  solRight: { flexBasis: "24%" },
  solCopy: { flexBasis: "28%", alignSelf: "stretch" },

  cardWide: {
    width: "100%",
    height: 210,
    borderRadius: 20,
    backgroundColor: "#101632",
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 8 },
    elevation: 7,
  },
  cardTall: {
    width: "100%",
    height: 210,
    borderRadius: 20,
    backgroundColor: "#101632",
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 8 },
    elevation: 7,
  },

  shapeSquareSm: {
    position: "absolute",
    width: 22,
    height: 22,
    borderRadius: 8,
    backgroundColor: "rgba(255,255,255,0.06)",
    left: 220,
    top: 140,
  },
  shapeSquareLg: {
    position: "absolute",
    width: 32,
    height: 32,
    borderRadius: 10,
    backgroundColor: "rgba(255,255,255,0.06)",
    left: 84,
    top: 340,
  },
  shapeQuoteLeft: {
    position: "absolute",
    left: 440,
    top: 320,
    color: "rgba(255,255,255,0.08)",
    fontSize: 120,
    fontWeight: "900",
  },
  shapeQuoteRight: {
    position: "absolute",
    right: 56,
    bottom: 24,
    color: "rgba(255,255,255,0.08)",
    fontSize: 120,
    fontWeight: "900",
  },

  teamSection: { paddingVertical: 32, paddingHorizontal: 20 },
  teamGrid: {
    maxWidth: 1200,
    alignSelf: "center",
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 18,
    rowGap: 22,
  },
  memberBox: {
    width: 180,
    height: 280,
    backgroundColor: "rgba(255,255,255,0.08)",
    borderRadius: 18,
    padding: 14,
    alignItems: "center",
    justifyContent: "flex-end",
    shadowColor: "#000",
    shadowOpacity: 0.22,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 6,
  },
  avatar: {
    position: "absolute",
    top: 14,
    width: 100,
    height: 150,
    borderRadius: 14,
    backgroundColor: "#101632",
  },
  nameFirst: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "800",
    marginTop: 168,
    textAlign: "center",
  },
  nameLast: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "800",
    marginTop: 2,
    marginBottom: 10,
    textAlign: "center",
  },
  linkedinBtn: {
    backgroundColor: "#0a66c2",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 999,
  },
  linkedinText: { color: "#fff", fontSize: 13, fontWeight: "700" },

  demoWrap: { paddingHorizontal: 20, paddingVertical: 28 },
  demoCard: {
    maxWidth: 1200,
    alignSelf: "center",
    width: "100%",
    backgroundColor: "#0E1016",
    borderRadius: 28,
    paddingVertical: 42,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.35,
    shadowRadius: 24,
    shadowOffset: { width: 0, height: 16 },
    elevation: 10,
  },
  demoBg: { position: "absolute", left: 0, right: 0, top: 0, bottom: 0, opacity: 0.9 },
  demoVignette: { position: "absolute", left: 0, right: 0, top: 0, bottom: 0 },
  demoHeading: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "800",
    textAlign: "center",
    letterSpacing: 0.3,
    marginBottom: 22,
  },
  demoButton: {
    backgroundColor: "#2D8CFF",
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 999,
    minWidth: 230,
    alignItems: "center",
  },
  demoButtonText: { color: "#FFFFFF", fontSize: 16, fontWeight: "700" },
});
