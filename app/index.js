// app/index.js
import React, { useRef, useState } from "react";
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

const LOGO_URL =
  "https://github.com/MjdMAlamri/Images/raw/refs/heads/main/FullLogo.png"; // kept intentionally (unused)

const HEADER_HEIGHT = 72;
const MAX_W = 1100;

export default function App() {
  // ---- Anchors for smooth scroll ----
  const scrollRef = useRef(null);
  const [anchors, setAnchors] = useState({
    problem: 0,
    solution: 0,
    team: 0,
    demo: 0,
  });
  const [active, setActive] = useState("problem");

  const onLayout = (key) => (e) =>
    setAnchors((p) => ({ ...p, [key]: e.nativeEvent.layout.y }));

  const scrollTo = (key) => {
    const y = Math.max((anchors[key] || 0) - HEADER_HEIGHT - 8, 0);
    scrollRef.current?.scrollTo?.({ y, animated: true });
  };

  // Track active section while scrolling
  const onScroll = (e) => {
    const y = e.nativeEvent.contentOffset.y;
    const pad = 200;
    let current = "problem";
    if (y >= (anchors.demo || 9e9) - pad) current = "demo";
    else if (y >= (anchors.team || 9e9) - pad) current = "team";
    else if (y >= (anchors.solution || 9e9) - pad) current = "solution";
    else current = "problem";
    if (current !== active) setActive(current);
  };

  // ---- Data ----
  const TEAM = [
    {
      first: "Besmelh",
      last: "Alshalaan",
      avatar:
        "https://github.com/MjdMAlamri/Images/raw/refs/heads/main/Besmelh",
      linkedin: "https://www.linkedin.com/in/besmelh-alshaalan/",
      email: "besmelh.alshaalan@gmail.com",
    },
    {
      first: "Shaykha",
      last: "Almaani",
      avatar: "https://github.com/MjdMAlamri/Images/raw/refs/heads/main/We",
      linkedin: "https://www.linkedin.com/in/shaykha-almaani/",
      email: "shaykhah.abdullah.a@gmail.com",
    },
    {
      first: "Rasheed",
      last: "Alghamdi",
      avatar:
        "https://github.com/MjdMAlamri/Images/raw/refs/heads/main/Rasheed",
      linkedin: "https://www.linkedin.com/in/rasheedmg/",
      email: "rasheedalghamdi1998@gmail.com",
    },
    {
      first: "Fai",
      last: "Alradhi",
      avatar: "https://github.com/MjdMAlamri/Images/raw/refs/heads/main/We",
      linkedin:
        "https://www.linkedin.com/in/fai-alradhi-caie™-080b66228/",
      email: "Faialradhi@gmail.com",
    },
    {
      first: "Mohammad",
      last: "Alsarrah",
      avatar:
        "https://github.com/MjdMAlamri/Images/raw/refs/heads/main/Mohammed",
      linkedin: "https://www.linkedin.com/in/mohammed-alsarrah/",
      email: "malsarrah0@gmail.com",
    },
    {
      first: "Mjd",
      last: "Alamri",
      avatar: "https://github.com/MjdMAlamri/Images/raw/refs/heads/main/We",
      linkedin: "https://www.linkedin.com/in/mjd-alamri-pnu/",
      email: "mjdmalamri@gmail.com",
    },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: "#0b0d2b" }}>
      {/* ===== Theme-matched Header ===== */}
      <View style={styles.header}>
        <Image
          source={{
            uri: "https://companieslogo.com/img/orig/ACN_BIG.D-871a76ce.png?t=1720244490",
          }}
          style={styles.logo}
        />
        <View style={styles.navWrap}>
          <View style={styles.navPill}>
            <NavItem
              label="PROBLEM"
              active={active === "problem"}
              onPress={() => scrollTo("problem")}
            />
            <NavItem
              label="SOLUTION"
              active={active === "solution"}
              onPress={() => scrollTo("solution")}
            />
            <NavItem
              label="TEAM"
              active={active === "team"}
              onPress={() => scrollTo("team")}
            />
            <NavItem
              label="DEMO"
              active={active === "demo"}
              onPress={() => scrollTo("demo")}
            />
          </View>
        </View>
      </View>

      <ScrollView
        ref={scrollRef}
        style={styles.page}
        contentContainerStyle={{ paddingBottom: 48 }}
        scrollEventThrottle={16}
        onScroll={onScroll}
      >
        {/* ===== Hero ===== */}
        <LinearGradient
          colors={["#0B1440", "#0D246A"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.heroBand}
        >
          <View style={styles.heroRow}>
            <View style={styles.heroLeft}>
              <Text style={styles.heroBrand}>EdVenture</Text>
              <Text style={styles.heroTagline}>
                Making education fun, engaging, and trackable
              </Text>
                          <TouchableOpacity 
            style={styles.ctaBtn} 
            activeOpacity={0.92}
            onPress={() => Linking.openURL("https://team1-mathproject.netlify.app/")}
            >
              <Text style={styles.ctaBtnText}>Try the Demo Now</Text>
            </TouchableOpacity>
            </View>
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1758685734343-491353d96a81?q=80&w=3132&auto=format&fit=crop",
              }}
              style={styles.heroArt}
            />
          </View>

          <View style={styles.featureStrip}>
            <Feature
              title="Fun"
              text="Math becomes play through interactive games powered by gesture and hand-drawing recognition."
              divider
            />
            <Feature
              title="Engaging"
              text="Learners interact by drawing and gesturing, making abstract math concepts easy to grasp."
              divider
            />
            <Feature
              title="Trackable"
              text="Teachers track performance in real time, while students review past equations."
            />
          </View>
        </LinearGradient>

        {/* ===== Problem ===== */}
        <View onLayout={onLayout("problem")} />
        <View style={[styles.band, styles.bandAlt]}>
          <View style={styles.row}>
            <View style={styles.colText}>
              <Text style={styles.h2}>Problem Statement</Text>
              <Text style={styles.body}>
                Traditional math learning relies heavily on textbooks and
                lectures, making the subject feel abstract and repetitive. This
                often leads to low engagement and reduced motivation among
                students. Teachers also struggle to track individual progress.
              </Text>
            </View>
            <Image
              source={{
                uri: "https://images.pexels.com/photos/249360/pexels-photo-249360.jpeg",
              }}
              style={styles.bigImage}
            />
          </View>
        </View>

        {/* ===== Solution (4-image grid) ===== */}
        <View onLayout={onLayout("solution")} />
        <View style={styles.band}>
          <View style={styles.row}>
            <View style={styles.grid}>
              <GridImg uri="https://images.pexels.com/photos/4144091/pexels-photo-4144091.jpeg" />
              <GridImg uri="https://images.pexels.com/photos/5905701/pexels-photo-5905701.jpeg" />
              <GridImg uri="https://images.pexels.com/photos/5905922/pexels-photo-5905922.jpeg" />
              <GridImg uri="https://images.pexels.com/photos/5905705/pexels-photo-5905705.jpeg" />
            </View>

            <View style={styles.colText}>
              <Text style={styles.h2}>Solution</Text>
              <Text style={styles.body}>
                With EdVenture Math, learning becomes fun, engaging,
                personalized, and trackable. Interactive games transform
                practice into play, while real-time feedback keeps students
                motivated. Lessons adapt to each student’s level, and progress
                is easy to monitor and review—making every step visible and
                meaningful.
              </Text>
            </View>
          </View>
        </View>

        {/* ===== Team (horizontal cards, 3 per row) ===== */}
        <View onLayout={onLayout("team")} />
        <LinearGradient colors={["#1a1f4a", "#0b0d2b"]} style={styles.teamBand}>
          <Text style={[styles.h2, { textAlign: "center", marginBottom: 22 }]}>
            Team Members
          </Text>

          <View style={styles.teamRowWrap}>
            {TEAM.map((m, i) => (
              <View key={i} style={styles.teamCard}>
                <Image source={{ uri: m.avatar }} style={styles.teamAvatar} />
                <View style={styles.teamInfo}>
                  <Text style={styles.teamOverline}>team member</Text>
                  <Text style={styles.teamName}>
                    {m.first} {m.last}
                  </Text>
                  <Text style={styles.teamCopy} numberOfLines={3}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin posuere, augue in efficitur luctus, urna arcu
                    porttitor diam, non elementum nibh arcu in augue.
                  </Text>
                  <View style={styles.teamActions}>
                    <TouchableOpacity
                      onPress={() => Linking.openURL(`mailto:${m.email}`)}
                      style={[styles.chip, styles.chipGhost]}
                      activeOpacity={0.85}
                    >
                      <Text style={styles.chipGhostText}>Email</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => Linking.openURL(m.linkedin)}
                      style={[styles.chip, styles.chipPrimary]}
                      activeOpacity={0.9}
                    >
                      <Text style={styles.chipPrimaryText}>LinkedIn</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </LinearGradient>

        {/* ===== CTA ===== */}
        <View onLayout={onLayout("demo")} />
        <View style={styles.ctaWrap}>
          <View style={styles.ctaCard}>
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?q=80&w=1600&auto=format&fit=crop",
              }}
              style={styles.ctaBg}
              blurRadius={30}
            />
            <LinearGradient
              colors={["rgba(0,0,0,0.35)", "rgba(0,0,0,0.55)"]}
              style={styles.ctaShade}
            />
            <Text style={styles.ctaTitle}>
              Experience It Yourself – Try the Demo
            </Text>

            {/* New: CTA button uses same header pill theme */}
            <TouchableOpacity 
            style={styles.ctaBtn} 
            activeOpacity={0.92}
            onPress={() => Linking.openURL("https://team1-mathproject.netlify.app/")}
            >
              <Text style={styles.ctaBtnText}>Try the Demo Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

/* ---------- header nav item ---------- */
const NavItem = ({ label, onPress, active }) => (
  <TouchableOpacity
    onPress={onPress}
    activeOpacity={0.9}
    style={[styles.pillItem, active && styles.pillItemActive]}
  >
    <Text style={[styles.pillText, active && styles.pillTextActive]}>
      {label}
    </Text>
  </TouchableOpacity>
);

/* ---------- small helpers ---------- */
const Feature = ({ title, text, divider }) => (
  <View style={[styles.featureItem, divider && styles.featureDivider]}>
    <Text style={styles.featureTitle}>{title}</Text>
    <Text style={styles.featureText}>{text}</Text>
  </View>
);

const GridImg = ({ uri }) => (
  <Image source={{ uri }} style={styles.gridImg} resizeMode="cover" />
);

/* =================== styles =================== */
const styles = StyleSheet.create({
  page: { flex: 1 },

  /* Theme-matched header */
  header: {
    height: HEADER_HEIGHT,
    paddingHorizontal: 16,
    backgroundColor: "#0b0d2b",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255,255,255,0.06)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: { width: 128, height: 44, resizeMode: "contain" },
  navWrap: { flexDirection: "row", alignItems: "center" },
  navPill: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.04)",
    borderRadius: 999,
    paddingVertical: 6,
    paddingHorizontal: 6,
    gap: 6,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.08)",
  },
  pillItem: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 999,
  },
  pillItemActive: {
    backgroundColor: "rgba(123,44,255,0.18)",
    borderWidth: 1,
    borderColor: "#7B2CFF",
  },
  pillText: {
    color: "#C9CDE6",
    fontSize: 13.5,
    fontWeight: "800",
    letterSpacing: 0.5,
  },
  pillTextActive: { color: "#FFFFFF" },

  /* Hero band */
  heroBand: { paddingBottom: 28 },
  heroRow: {
    maxWidth: MAX_W,
    alignSelf: "center",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 24,
    paddingHorizontal: 24,
    paddingTop: 10,
  },
  heroLeft: { flex: 1, alignItems: "flex-start" },
  heroBrand: {
    color: "#FFFFFF",
    fontSize: 48,
    fontWeight: "800",
    letterSpacing: 0.5,
    marginBottom: 10,
  },
  heroTagline: { color: "#E6E8F2", fontSize: 18, lineHeight: 26 },
  heroArt: {
    width: 420,
    height: 260,
    borderRadius: 22,
    backgroundColor: "rgba(255,255,255,0.06)",
  },

  /* Feature strip */
  featureStrip: {
    maxWidth: MAX_W,
    alignSelf: "center",
    width: "100%",
    marginTop: 24,
    padding: 18,
    borderRadius: 28,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "rgba(255,255,255,0.06)",
  },
  featureItem: { flex: 1, paddingHorizontal: 14, alignItems: "center" },
  featureDivider: {
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

  /* Bands */
  band: { paddingHorizontal: 24, paddingVertical: 56 },
  bandAlt: { backgroundColor: "rgba(255,255,255,0.02)" },

  row: {
    maxWidth: MAX_W,
    alignSelf: "center",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 32,
  },
  colText: { flexBasis: "50%" },
  h2: { color: "#fff", fontSize: 26, fontWeight: "800", marginBottom: 14 },
  body: { color: "#DDE2F1", fontSize: 16, lineHeight: 26 },

  bigImage: {
    flexBasis: "40%",
    height: 220,
    borderRadius: 16,
    backgroundColor: "#101632",
  },

  /* Solution grid */
  grid: {
    flexBasis: "50%",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
  gridImg: {
    width: "48%",
    height: 120,
    borderRadius: 14,
    backgroundColor: "#101632",
  },

  /* Team band (card layout) */
  teamBand: { paddingVertical: 32, paddingHorizontal: 20 },
  teamRowWrap: {
    maxWidth: 1200,
    alignSelf: "center",
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 24,
  },
  teamCard: {
    width: "32%",
    minWidth: 320,
    backgroundColor: "rgba(255,255,255,0.08)",
    borderRadius: 22,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },
  teamAvatar: {
    width: 84,
    height: 84,
    borderRadius: 42,
    backgroundColor: "#101632",
  },
  teamInfo: { flex: 1, paddingLeft: 2 },
  teamOverline: {
    color: "#C9CCE3",
    fontSize: 11,
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 2,
  },
  teamName: { color: "#fff", fontSize: 18, fontWeight: "800", marginBottom: 6 },
  teamCopy: { color: "#DDE2F1", fontSize: 13.5, lineHeight: 20 },
  teamActions: { flexDirection: "row", gap: 10, marginTop: 12 },
  chip: { paddingVertical: 8, paddingHorizontal: 14, borderRadius: 999 },
  chipGhost: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.25)",
  },
  chipGhostText: { color: "#E6E8F2", fontSize: 13, fontWeight: "700" },
  chipPrimary: { backgroundColor: "#0a66c2" },
  chipPrimaryText: { color: "#fff", fontSize: 13, fontWeight: "700" },

  /* CTA */
  ctaWrap: { paddingHorizontal: 20, paddingVertical: 28 },
  ctaCard: {
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
  },
  ctaBg: { position: "absolute", left: 0, right: 0, top: 0, bottom: 0, opacity: 0.9 },
  ctaShade: { position: "absolute", left: 0, right: 0, top: 0, bottom: 0 },
  ctaTitle: { color: "#FFFFFF", fontSize: 28, fontWeight: "800", textAlign: "center", marginBottom: 22 },

  // NEW: CTA button with the same header pill theme
  ctaBtn: {
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 999,
    minWidth: 230,
    alignItems: "center",
    borderWidth: 1.25,
    borderColor: "#7B2CFF",
    backgroundColor: "rgba(123,44,255,0.18)",
    shadowColor: "#7B2CFF",
    shadowOpacity: 0.35,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 0 },
    marginTop: "30px"
  },
  ctaBtnText: { color: "#FFFFFF", fontSize: 16, fontWeight: "800" },
});
