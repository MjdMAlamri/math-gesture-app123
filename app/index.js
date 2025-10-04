// app/index.js (fixed for web deployment)
import React, { useRef, useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking,
  useWindowDimensions,
  Platform,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

// ===== Theme =====
const HEADER_HEIGHT = 72;
const MAX_W = 1200;
const RADIUS = 20;
const COLOR = {
  bg: "#0a0d1f",
  bgAlt: "rgba(255,255,255,0.04)",
  card: "rgba(255,255,255,0.06)",
  border: "rgba(255,255,255,0.10)",
  text: "#ffffff",
  sub: "#C9CFE8",
  body: "#DDE2F1",
  brand: "#7B2CFF",
  brandDim: "rgba(123,44,255,0.22)",
};

export default function App() {
  const { width, height } = useWindowDimensions();
  const isMobile = width < 640;

  const scrollRef = useRef(null);
  const sectionRefs = useRef({});
  const [active, setActive] = useState("problem");

  const scrollTo = (key) => {
    setActive(key);
    if (sectionRefs.current[key]) {
      sectionRefs.current[key].measureLayout(
        scrollRef.current,
        (x, y) => {
          scrollRef.current?.scrollTo?.({ 
            y: Math.max(y - HEADER_HEIGHT - 8, 0), 
            animated: true 
          });
        },
        () => {}
      );
    }
  };

  const onScroll = (e) => {
    const y = e.nativeEvent.contentOffset.y;
    const pad = 220;
    let current = "problem";
    
    // Simple threshold-based detection
    if (y >= height * 2.5) current = "demo";
    else if (y >= height * 1.8) current = "team";
    else if (y >= height * 0.9) current = "solution";
    else current = "problem";
    
    if (current !== active) setActive(current);
  };

  const SECTION_MIN = Math.max(height * 0.85, isMobile ? 560 : 640);

  const TEAM = [
    {
      first: "Besmelh",
      last: "Alshalaan",
      avatar: "https://github.com/MjdMAlamri/Images/raw/refs/heads/main/Besmelh",
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
      avatar: "https://github.com/MjdMAlamri/Images/raw/refs/heads/main/Rasheed",
      linkedin: "https://www.linkedin.com/in/rasheedmg/",
      email: "rasheedalghamdi1998@gmail.com",
    },
    {
      first: "Fai",
      last: "Alradhi",
      avatar: "https://github.com/MjdMAlamri/Images/raw/refs/heads/main/We",
      linkedin: "https://www.linkedin.com/in/fai-alradhi-caie™-080b66228/",
      email: "Faialradhi@gmail.com",
    },
    {
      first: "Mohammad",
      last: "Alsarrah",
      avatar: "https://github.com/MjdMAlamri/Images/raw/refs/heads/main/Mohammed",
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
    <View style={{ flex: 1, backgroundColor: COLOR.bg }}>
      {/* ===== Header ===== */}
      <View style={styles.headerWrap}>
        <LinearGradient
          colors={["rgba(10,13,31,0.85)", "rgba(10,13,31,0.65)"]}
          style={styles.header}
        >
          <Image
            source={{
              uri: "https://companieslogo.com/img/orig/ACN_BIG.D-871a76ce.png?t=1720244490",
            }}
            style={styles.logo}
          />

          <View style={styles.navWrap}>
            <View style={styles.navPill}>
              {[
                { label: "PROBLEM", key: "problem" },
                { label: "SOLUTION", key: "solution" },
                { label: "TEAM", key: "team" },
                { label: "DEMO", key: "demo" },
              ].map((i) => (
                <TouchableOpacity
                  key={i.key}
                  onPress={() => scrollTo(i.key)}
                  activeOpacity={0.9}
                  style={[
                    styles.pillItem,
                    active === i.key && styles.pillItemActive,
                  ]}
                >
                  <Text
                    style={[styles.pillText, active === i.key && styles.pillTextActive]}
                  >
                    {i.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </LinearGradient>
        <View style={styles.headerHairline} />
      </View>

      <ScrollView
        ref={scrollRef}
        style={styles.page}
        contentContainerStyle={{ paddingBottom: 64 }}
        scrollEventThrottle={16}
        onScroll={onScroll}
      >
        {/* ===== Hero ===== */}
        <View style={[styles.heroBand, { minHeight: SECTION_MIN }]}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1758685734343-491353d96a81?q=80&w=2400&auto=format&fit=crop",
            }}
            style={StyleSheet.absoluteFill}
            resizeMode="cover"
            blurRadius={Platform.OS === 'web' ? 0 : undefined}
          />
          <LinearGradient
            colors={["rgba(10,13,31,0.3)", "rgba(10,13,31,0.75)"]}
            style={StyleSheet.absoluteFill}
          />
          <View style={styles.heroRow}>
            <View style={styles.heroLeft}>
              <Text style={[styles.heroBrand, isMobile && { fontSize: 44 }]}>
                EdVenture
              </Text>
              <Text
                style={[
                  styles.heroTagline,
                  isMobile && { fontSize: 18, lineHeight: 26 },
                ]}
              >
                Making education fun, engaging, and trackable
              </Text>

              <View style={styles.ctaRow}>
                <TouchableOpacity
                  style={[styles.ctaBtn, isMobile && { minWidth: 200 }]}
                  activeOpacity={0.92}
                  onPress={() => Linking.openURL("https://team1-mathproject.netlify.app/")}
                >
                  <Text style={styles.ctaBtnText}>Try the Demo Now</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.ctaBtnGhost, isMobile && { minWidth: 160 }]}
                  activeOpacity={0.92}
                  onPress={() => scrollTo("solution")}
                >
                  <Text style={styles.ctaGhostText}>See How It Works</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        {/* ===== Problem ===== */}
        <View 
          ref={(ref) => { sectionRefs.current.problem = ref; }}
          style={[styles.band, styles.bandAlt, { minHeight: SECTION_MIN }]}
        >
          <View style={[styles.container, isMobile && styles.containerMobile]}>
            <View style={[styles.row, isMobile && styles.rowMobile]}>
              <View style={[styles.colText, isMobile && styles.colTextMobile]}>
                <Text style={[styles.h2, isMobile && { fontSize: 28 }]}>
                  Problem Statement
                </Text>
                <Text style={[styles.body, isMobile && { fontSize: 16 }]}>
                  Traditional math learning relies heavily on textbooks and lectures, making the
                  subject feel abstract and repetitive. This often leads to low engagement and
                  reduced motivation among students. Teachers also struggle to track individual
                  progress.
                </Text>
              </View>
              <View style={[styles.figureCard, isMobile && styles.figureCardMobile]}>
                <Image
                  source={{ uri: "https://images.pexels.com/photos/249360/pexels-photo-249360.jpeg" }}
                  style={styles.figureImg}
                />
              </View>
            </View>
          </View>
        </View>

        {/* ===== Solution ===== */}
        <View 
          ref={(ref) => { sectionRefs.current.solution = ref; }}
          style={[styles.band, { minHeight: SECTION_MIN }]}
        >
          <View style={styles.container}>
            <View style={styles.row}>
              <View style={{ width: '100%' }}>
                <Text style={[styles.h2, { marginBottom: 24 }]}>Solution</Text>

                <View style={[styles.solutionSquares, isMobile && styles.solutionSquaresMobile]}>
                  <SquareFeature
                    title="Fun"
                    text="Interactive math games powered by gesture and hand-draw recognition."
                    bg="https://images.unsplash.com/photo-1557682250-33bd709cbe85?q=80&w=1200&auto=format&fit=crop"
                  />
                  <SquareFeature
                    title="Engaging"
                    text="Students draw and gesture to grasp abstract concepts quickly."
                    bg="https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1200&auto=format&fit=crop"
                  />
                  <SquareFeature
                    title="Trackable"
                    text="Real-time analytics for teachers; history for students."
                    bg="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1200&auto=format&fit=crop"
                  />
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* ===== Team ===== */}
        <View 
          ref={(ref) => { sectionRefs.current.team = ref; }}
          style={{ minHeight: SECTION_MIN }}
        >
          <LinearGradient 
            colors={["#12183d", COLOR.bg]} 
            style={styles.teamBand}
          >
            <View style={styles.container}>
              <Text style={[styles.h2, { marginBottom: 24, fontSize: isMobile ? 28 : 32 }]}>
                Team Members
              </Text>

              <View style={[styles.teamRowWrap, isMobile && styles.teamRowWrapMobile]}>
                {TEAM.map((m, i) => (
                  <View key={i} style={[styles.teamCard, isMobile && styles.teamCardMobile]}>
                    <LinearGradient
                      colors={[COLOR.brand, "rgba(123,44,255,0.18)"]}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 1 }}
                      style={styles.avatarFrame}
                    >
                      <Image source={{ uri: m.avatar }} style={styles.teamAvatar} />
                    </LinearGradient>

                    <View style={styles.teamInfo}>
                      <Text style={styles.teamOverline}>team member</Text>
                      <Text style={styles.teamName}>
                        {m.first} {m.last}
                      </Text>
                      <Text style={styles.teamCopy} numberOfLines={3}>
                        Passionate about building delightful, measurable learning experiences.
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
            </View>
          </LinearGradient>
        </View>

        {/* ===== CTA ===== */}
        <View 
          ref={(ref) => { sectionRefs.current.demo = ref; }}
          style={[styles.ctaWrap, { minHeight: Math.max(SECTION_MIN * 0.7, 420) }]}
        >
          <View style={styles.ctaCard}>
            <Image
              source={{ uri: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?q=80&w=1600&auto=format&fit=crop" }}
              style={styles.ctaBg}
              blurRadius={Platform.OS === 'web' ? 0 : 30}
            />
            <LinearGradient 
              colors={["rgba(0,0,0,0.35)", "rgba(0,0,0,0.55)"]} 
              style={styles.ctaShade} 
            />
            <Text style={styles.ctaTitle}>Experience It Yourself — Try the Demo</Text>

            <View style={styles.ctaRow}>
              <TouchableOpacity
                style={styles.ctaBtn}
                activeOpacity={0.92}
                onPress={() => Linking.openURL("https://team1-mathproject.netlify.app/")}
              >
                <Text style={styles.ctaBtnText}>Try the Demo Now</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.ctaBtnGhost}
                activeOpacity={0.92}
                onPress={() => scrollTo("problem")}
              >
                <Text style={styles.ctaGhostText}>Why We Built This</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

/* ---------- helpers ---------- */
const SquareFeature = ({ title, text, bg }) => (
  <View style={styles.squareCard}>
    <Image
      source={{ uri: bg }}
      style={StyleSheet.absoluteFill}
      resizeMode="cover"
    />
    <LinearGradient 
      colors={["rgba(0,0,0,0.10)", "rgba(0,0,0,0.22)"]} 
      style={styles.squareInner}
    >
      <Text style={styles.squareTitle}>{title}</Text>
      <Text style={styles.squareText}>{text}</Text>
    </LinearGradient>
  </View>
);

/* =================== styles =================== */
const styles = StyleSheet.create({
  page: { flex: 1 },

  container: {
    maxWidth: MAX_W,
    width: '100%',
    alignSelf: 'center',
    paddingHorizontal: 24,
  },
  containerMobile: {
    paddingHorizontal: 20,
  },

  /* Header */
  headerWrap: {
    position: "relative",
    zIndex: 20,
  },
  header: {
    height: HEADER_HEIGHT,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerHairline: {
    height: 1,
    backgroundColor: "rgba(255,255,255,0.06)",
  },
  logo: { width: 128, height: 44, resizeMode: "contain" },
  navWrap: { flexDirection: "row", alignItems: "center" },
  navPill: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLOR.card,
    borderRadius: 999,
    paddingVertical: 6,
    paddingHorizontal: 6,
    gap: 6,
    borderWidth: 1,
    borderColor: COLOR.border,
  },
  pillItem: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 999,
  },
  pillItemActive: {
    backgroundColor: COLOR.brandDim,
    borderWidth: 1,
    borderColor: COLOR.brand,
  },
  pillText: {
    color: "#C9CDE6",
    fontSize: 14,
    fontWeight: "800",
    letterSpacing: 0.5,
  },
  pillTextActive: { color: COLOR.text },

  /* Hero */
  heroBand: { 
    paddingBottom: 32, 
    paddingTop: 12,
    position: 'relative',
  },
  heroRow: {
    maxWidth: MAX_W,
    alignSelf: "center",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 24,
    paddingHorizontal: 24,
    paddingTop: 22,
    paddingBottom: 18,
    flex: 1,
  },
  heroLeft: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  heroBrand: {
    color: COLOR.text,
    fontSize: 56,
    fontWeight: "900",
    letterSpacing: 0.5,
    marginBottom: 10,
  },
  heroTagline: {
    color: "#E6E8F2",
    fontSize: 20,
    lineHeight: 28,
    marginBottom: 18,
    maxWidth: 760,
  },
  ctaRow: {
    flexDirection: "row",
    gap: 12,
    flexWrap: "wrap",
  },

  /* Bands */
  band: {
    paddingVertical: 72,
    justifyContent: "center",
  },
  bandAlt: { backgroundColor: COLOR.bgAlt },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
    gap: 36,
  },
  rowMobile: {
    flexDirection: 'column',
    gap: 24,
  },
  colText: { 
    flex: 1,
    maxWidth: '50%',
  },
  colTextMobile: {
    maxWidth: '100%',
  },
  h2: { 
    color: COLOR.text, 
    fontSize: 32, 
    fontWeight: "900", 
    marginBottom: 16 
  },
  body: { 
    color: COLOR.body, 
    fontSize: 18, 
    lineHeight: 28 
  },

  figureCard: {
    flex: 1,
    maxWidth: '42%',
    backgroundColor: COLOR.card,
    borderRadius: RADIUS,
    borderWidth: 1,
    borderColor: COLOR.border,
    overflow: "hidden",
  },
  figureCardMobile: {
    maxWidth: '100%',
  },
  figureImg: {
    width: "100%",
    height: 300,
  },

  /* Solution squares */
  solutionSquares: {
    flexDirection: "row",
    gap: 16,
    justifyContent: "space-between",
  },
  solutionSquaresMobile: {
    flexDirection: "column",
  },
  squareCard: {
    flex: 1,
    borderRadius: RADIUS,
    overflow: "hidden",
    minHeight: 220,
    borderWidth: 1,
    borderColor: COLOR.border,
    backgroundColor: COLOR.card,
  },
  squareInner: {
    flex: 1,
    borderRadius: RADIUS,
    padding: 20,
    justifyContent: "space-between",
  },
  squareTitle: {
    color: COLOR.text,
    fontSize: 20,
    fontWeight: "800",
    marginBottom: 8,
  },
  squareText: {
    color: "#D8DBEA",
    fontSize: 14,
    lineHeight: 20,
  },

  /* Team */
  teamBand: { 
    paddingVertical: 60, 
    paddingHorizontal: 20 
  },
  teamRowWrap: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 24,
  },
  teamRowWrapMobile: {
    justifyContent: 'center',
  },
  teamCard: {
    width: '31%',
    minWidth: 320,
    backgroundColor: COLOR.card,
    borderRadius: RADIUS + 2,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    borderWidth: 1,
    borderColor: COLOR.border,
  },
  teamCardMobile: {
    width: '100%',
    minWidth: 280,
  },
  avatarFrame: {
    width: 80,
    height: 130,
    borderRadius: 18,
    padding: 2,
    shadowColor: COLOR.brand,
    shadowOpacity: 0.35,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 0 },
  },
  teamAvatar: {
    flex: 1,
    borderRadius: 16,
    backgroundColor: "#101632",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.25)",
  },
  teamInfo: { flex: 1, paddingLeft: 2 },
  teamOverline: {
    color: "#C9CCE3",
    fontSize: 11,
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 2,
  },
  teamName: { 
    color: COLOR.text, 
    fontSize: 19, 
    fontWeight: "800", 
    marginBottom: 6 
  },
  teamCopy: { 
    color: COLOR.body, 
    fontSize: 13.5, 
    lineHeight: 20 
  },
  teamActions: { 
    flexDirection: "row", 
    gap: 10, 
    marginTop: 12 
  },
  chip: { 
    paddingVertical: 9, 
    paddingHorizontal: 14, 
    borderRadius: 999 
  },
  chipGhost: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.25)",
  },
  chipGhostText: { 
    color: "#E6E8F2", 
    fontSize: 13, 
    fontWeight: "700" 
  },
  chipPrimary: { backgroundColor: "#0a66c2" },
  chipPrimaryText: { 
    color: COLOR.text, 
    fontSize: 13, 
    fontWeight: "700" 
  },

  /* CTA */
  ctaWrap: { 
    paddingHorizontal: 20, 
    paddingVertical: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ctaCard: {
    maxWidth: MAX_W,
    width: "100%",
    backgroundColor: "#0E1016",
    borderRadius: RADIUS + 8,
    paddingVertical: 48,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    borderWidth: 1,
    borderColor: COLOR.border,
  },
  ctaBg: { 
    position: "absolute", 
    left: 0, 
    right: 0, 
    top: 0, 
    bottom: 0, 
    opacity: 0.9 
  },
  ctaShade: { 
    position: "absolute", 
    left: 0, 
    right: 0, 
    top: 0, 
    bottom: 0 
  },
  ctaTitle: { 
    color: COLOR.text, 
    fontSize: 30, 
    fontWeight: "900", 
    textAlign: "center", 
    marginBottom: 22 
  },

  ctaBtn: {
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 999,
    minWidth: 230,
    alignItems: "center",
    borderWidth: 1.25,
    borderColor: COLOR.brand,
    backgroundColor: COLOR.brandDim,
    shadowColor: COLOR.brand,
    shadowOpacity: 0.35,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 0 },
  },
  ctaBtnText: { 
    color: COLOR.text, 
    fontSize: 16, 
    fontWeight: "800" 
  },
  ctaBtnGhost: {
    paddingVertical: 12,
    paddingHorizontal: 22,
    borderRadius: 999,
    minWidth: 180,
    alignItems: "center",
    borderWidth: 1,
    borderColor: COLOR.border,
    backgroundColor: "transparent",
  },
  ctaGhostText: { 
    color: "#E6E8F2", 
    fontSize: 15, 
    fontWeight: "800" 
  },
});