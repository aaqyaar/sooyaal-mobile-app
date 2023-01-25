import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Vibration,
  Image,
} from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { AntDesign } from "@expo/vector-icons";
import useAuth from "../../hooks/useAuth";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";

export default function HomeScreen({ navigation }) {
  const { auth } = useAuth();

  const user = {
    name: auth?.data?.name,
    email: auth?.data?.email,
    photoURL: auth?.data?.photoURL,
  };

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row",
          marginHorizontal: 30,
          marginTop: 25,
          marginBottom: 15,
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <Image
            source={{
              uri:
                user.photoURL ||
                "https://www.moveo.it/wp-content/uploads/2018/10/empty-avatar.png",
            }}
            style={styles.avatar}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <Feather name="menu" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* card with posts using ScrollView */}
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={{
          padding: 0,
        }}
        showsVerticalScrollIndicator
      >
        {[...Array(10)].map((_, i) => {
          return (
            <View key={i} style={styles.card}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",

                  marginTop: 5,
                  marginBottom: 15,
                }}
              >
                <Text style={{ color: "#171717", fontSize: 15 }}>
                  {user.name}
                </Text>

                <TouchableOpacity>
                  <AntDesign name="ellipsis1" size={24} color="black" />
                </TouchableOpacity>
              </View>
              <Image
                source={{
                  uri: "https://www.traveltourxp.com/wp-content/uploads/2016/09/Attractions-Of-Somalia.jpg",
                }}
                style={styles.image}
              />

              <Text style={{ color: "#171717", fontSize: 20 }}>
                Post {i + 1}
              </Text>
              <Text
                style={{
                  color: "#171717",
                  fontSize: 15,
                  paddingTop: 10,
                  paddingBottom: 10,
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                quod, quia, voluptas, voluptate quas voluptates quibusdam
                voluptatum quae quidem quos nesciunt. Quisquam, quae. Quisquam
                quae, quod quibusdam quia quos voluptas.
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <TouchableOpacity>
                    <Ionicons
                      name="heart-outline"
                      size={24}
                      color="#171717"
                      style={{
                        marginRight: 10,
                      }}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity>
                    <AntDesign
                      name="like2"
                      size={24}
                      color="#171717"
                      style={{
                        marginRight: 10,
                      }}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <AntDesign
                      name="dislike2"
                      size={24}
                      color="#171717"
                      style={{
                        marginRight: 10,
                      }}
                    />
                  </TouchableOpacity>
                </View>
                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                  onPress={() => Vibration.vibrate(100)}
                >
                  <Text style={{ color: "#171717" }}>Read More</Text>
                  <Ionicons
                    name="chevron-forward-outline"
                    size={20}
                    color="#171717"
                  />
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "center",
  },
  scrollView: {
    height: "100%",
    width: "100%",

    paddingHorizontal: 25,
  },

  card: {
    backgroundColor: "#fff",
    width: "100%",
    height: "auto",
    borderRadius: 5,
    marginTop: 10,
    padding: 10,
    shadowColor: "#e5e7eb",
    shadowOffset: {
      width: 4,
      height: 10,
    },
    shadowOpacity: 99,
    shadowRadius: 20,
    elevation: 10,
  },

  image: {
    height: 200,
    width: undefined,
    borderRadius: 2,
    marginBottom: 10,
    flex: 1,
    resizeMode: "cover",
  },

  avatar: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
});
