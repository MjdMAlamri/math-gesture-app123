// app/index.js
import React, { useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  Linking,
  useWindowDimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const HEADER_HEIGHT = 72;
const MAX_W = 1200;

export default function App() {
  const { width, height } = useWindowDimensions();
  const isMobile = width < 640; // simple breakpoint

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
    // make the pill look active right away (fixes DEMO not coloring)
    setActive(key);
    const y = Math.max((anchors[key] || 0) - HEADER_HEIGHT - 8, 0);
    scrollRef.current?.scrollTo?.({ y, animated: true });
  };

  // Track active section while scrolling
  const onScroll = (e) => {
    const y = e.nativeEvent.contentOffset.y;
    const pad = 220;
    let current = "problem";
    if (y >= (anchors.demo || 9e9) - pad) current = "demo";
    else if (y >= (anchors.team || 9e9) - pad) current = "team";
    else if (y >= (anchors.solution || 9e9) - pad) current = "solution";
    else current = "problem";
    if (current !== active) setActive(current);
  };

  // SECTION sizing: fill the page more
  const SECTION_MIN = Math.max(height * 0.85, isMobile ? 560 : 640);

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
      {/* ===== Header ===== */}
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
        contentContainerStyle={{ paddingBottom: 64 }}
        scrollEventThrottle={16}
        onScroll={onScroll}
      >
        {/* ===== Hero (image background only here) ===== */}
        <ImageBackground
          source={{
            uri: "https://images.unsplash.com/photo-1758685734343-491353d96a81?q=80&w=2400&auto=format&fit=crop",
          }}
          resizeMode="cover"
          style={[styles.heroBand, { minHeight: SECTION_MIN }]}
          imageStyle={{ opacity: 0.6 }}
        >
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

                <TouchableOpacity
                  style={[styles.ctaBtn, isMobile && { minWidth: 200 }]}
                  activeOpacity={0.92}
                  onPress={() =>
                    Linking.openURL("https://team1-mathproject.netlify.app/")
                  }
                >
                  <Text style={styles.ctaBtnText}>Try the Demo Now</Text>
                </TouchableOpacity>
              </View>
            </View>
        </ImageBackground>

        {/* ===== Problem ===== */}
        <View onLayout={onLayout("problem")} />
        <View style={[styles.band, styles.bandAlt, { minHeight: SECTION_MIN }]}>
          <View
            style={[
              styles.row,
              isMobile && { flexDirection: "column", gap: 20 },
            ]}
          >
            <View style={[styles.colText, isMobile && { flexBasis: "100%" }]}>
              <Text style={[styles.h2, { fontSize: isMobile ? 28 : 32 }]}>
                Problem Statement
              </Text>
              <Text style={[styles.body, { fontSize: isMobile ? 16 : 18 }]}>
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
              style={[
                styles.bigImage,
                { height: isMobile ? 220 : 300 },
                isMobile && { flexBasis: "100%", width: "100%" },
              ]}
            />
          </View>
        </View>

        {/* ===== Solution (title + 3 boxes with bg images) ===== */}
{/* ===== Solution (title + 3 boxes with bg images) ===== */}
<View onLayout={onLayout("solution")} />
<View style={[styles.band, { minHeight: SECTION_MIN }]}>
  <View style={[styles.row, { alignItems: "center" }]}>
    <View style={{ flexBasis: "100%" }}>
      <Text style={[styles.h2, { marginBottom: 24 }]}>Solution</Text>

      <View
        style={[
          styles.solutionSquares,
          isMobile && styles.solutionSquaresMobile, // stack on phones
        ]}
      >
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


        {/* ===== Team ===== */}
        <View onLayout={onLayout("team")} />
        <LinearGradient
          colors={["#1a1f4a", "#0b0d2b"]}
          style={[styles.teamBand, { minHeight: SECTION_MIN }]}
        >
          <View style={[styles.row, { flexDirection: "column", gap: 16 }]}>
            <Text
              style={[
                styles.h2,
                { textAlign: "left", marginBottom: 6, fontSize: isMobile ? 28 : 32 },
              ]}
            >
              Team Members
            </Text>

            <View
              style={[
                styles.teamRowWrap,
                isMobile && { justifyContent: "center" },
              ]}
            >
              {TEAM.map((m, i) => (
                <View
                  key={i}
                  style={[
                    styles.teamCard,
                    isMobile && { width: "100%", minWidth: undefined },
                  ]}
                >
                  {/* Rounded-rect avatar in gradient frame */}
                  <LinearGradient
                    colors={["#7B2CFF", "rgba(123,44,255,0.2)"]}
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin posuere, augue in efficitur luctus, urna arcu
                      porttitor diam.
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

        {/* ===== CTA ===== */}
        <View onLayout={onLayout("demo")} />
        <View style={[styles.ctaWrap, { minHeight: Math.max(SECTION_MIN * 0.7, 420) }]}>
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

            <TouchableOpacity
              style={styles.ctaBtn}
              activeOpacity={0.92}
              onPress={() =>
                Linking.openURL("https://team1-mathproject.netlify.app/")
              }
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

/* ---------- helpers ---------- */
const SquareFeature = ({ title, text, bg }) => (
  <ImageBackground
    source={{ uri: bg }}
    resizeMode="cover"
    imageStyle={{ opacity: 0.28, borderRadius: 20 }}
    style={styles.squareCard}
  >
    <LinearGradient
      colors={["rgba(0,0,0,0.12)", "rgba(0,0,0,0.22)"]}
      style={styles.squareInner}
    >
      <Text style={styles.squareTitle}>{title}</Text>
      <Text style={styles.squareText}>{text}</Text>
    </LinearGradient>
  </ImageBackground>
);

/* =================== styles =================== */
const styles = StyleSheet.create({
  page: { flex: 1 },

  /* Header */
  header: {
    height: HEADER_HEIGHT,
    paddingHorizontal: 16,
    backgroundColor: "#0b0d2b",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255,255,255,0.06)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    zIndex: 10,
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
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 999,
  },
  pillItemActive: {
    backgroundColor: "rgba(123,44,255,0.22)",
    borderWidth: 1,
    borderColor: "#7B2CFF",
  },
  pillText: {
    color: "#C9CDE6",
    fontSize: 14,
    fontWeight: "800",
    letterSpacing: 0.5,
  },
  pillTextActive: { color: "#FFFFFF" },

  /* Hero */
  heroBand: { paddingBottom: 18, paddingTop: 6 },
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
  heroLeft: { flex: 1, 
    alignItems: "flex-start" , 
     display: "flex",
    justifyContent: "center"},
  heroBrand: {
    color: "#FFFFFF",
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

  /* Bands */
band: { 
  paddingHorizontal: 24, 
  paddingVertical: 72, 
  justifyContent: "center", 
  flex: 1 
},

  bandAlt: { backgroundColor: "rgba(255,255,255,0.04)" },

  row: {
    maxWidth: MAX_W,
    alignSelf: "center",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 36,
  },
  colText: { flexBasis: "50%" },
  h2: { color: "#fff", fontSize: 32, fontWeight: "900", marginBottom: 16 },
  body: { color: "#DDE2F1", fontSize: 18, lineHeight: 28 },

  bigImage: {
    flexBasis: "42%",
    height: 300,
    borderRadius: 18,
    backgroundColor: "#101632",
  },

/* Solution squares */
solutionSquares: {
  flexDirection: "row",
  gap: 16,
  justifyContent: "space-between",
  alignItems: "stretch",    // let children fill height
},
solutionSquaresMobile: {
  flexDirection: "column",
},
squareCard: {
  flex: 1,
  borderRadius: 20,
  overflow: "hidden",
  minHeight: 200,           // good on desktop; stacked on mobile
  borderWidth: 1,
  borderColor: "rgba(255,255,255,0.10)",
},
squareInner: {
  flex: 1,
  borderRadius: 20,
  padding: 20,              // numeric (RN)
  justifyContent: "space-between",
},
squareTitle: {
  color: "#fff",
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
  teamBand: { paddingVertical: 40, paddingHorizontal: 20 },
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
    gap: 16,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.10)",
  },
  avatarFrame: {
    width: 80,
    height: 130,
    borderRadius: 18,
    padding: 2,
    shadowColor: "#7B2CFF",
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
  teamName: { color: "#fff", fontSize: 19, fontWeight: "800", marginBottom: 6 },
  teamCopy: { color: "#DDE2F1", fontSize: 13.5, lineHeight: 20 },
  teamActions: { flexDirection: "row", gap: 10, marginTop: 12 },
  chip: { paddingVertical: 9, paddingHorizontal: 14, borderRadius: 999 },
  chipGhost: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.25)",
  },
  chipGhostText: { color: "#E6E8F2", fontSize: 13, fontWeight: "700" },
  chipPrimary: { backgroundColor: "#0a66c2" },
  chipPrimaryText: { color: "#fff", fontSize: 13, fontWeight: "700" },

  /* CTA */
  ctaWrap: { paddingHorizontal: 20, paddingVertical: 32 },
  ctaCard: {
    maxWidth: 1200,
    alignSelf: "center",
    width: "100%",
    backgroundColor: "#0E1016",
    borderRadius: 28,
    paddingVertical: 48,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.08)",
  },
  ctaBg: { position: "absolute", left: 0, right: 0, top: 0, bottom: 0, opacity: 0.9 },
  ctaShade: { position: "absolute", left: 0, right: 0, top: 0, bottom: 0 },
  ctaTitle: { color: "#FFFFFF", fontSize: 30, fontWeight: "900", textAlign: "center", marginBottom: 22 },

  // CTA button
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
    marginTop: 16,
  },
  ctaBtnText: { color: "#FFFFFF", fontSize: 16, fontWeight: "800" },
});
