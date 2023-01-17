import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Vibration,
} from "react-native";
import React, { useEffect } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { AntDesign } from "@expo/vector-icons";

export default function HomeScreen({ navigation }) {
  // const getUsers = async () => {
  //   try {
  //     const response = await fetch(
  //       "http://localhost/php-training/api/posts.php",
  //       {
  //         method: "GET",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );
  //     const data = await response.json();
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getUsers();
  // }, []);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{
          position: "absolute",
          top: 60,
          left: 15,
          bottom: 2,

          height: 40,
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
        }}
        onPress={() => navigation.navigate("Login")}
      >
        <Ionicons name="arrow-back-outline" size={24} color="black" />
      </TouchableOpacity>
      {/* card with posts using ScrollView */}
      <ScrollView style={styles.scrollView}>
        {[...Array(10)].map((_, i) => {
          return (
            <View
              key={i}
              style={{
                backgroundColor: "#171717",
                width: "100%",
                height: 200,
                borderRadius: 10,
                marginTop: 20,
                padding: 10,
                shadowColor: "#171717",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.5,
                shadowRadius: 3.84,
                elevation: 6,
              }}
            >
              <Text style={{ color: "#f5f5f5", fontSize: 20 }}>
                Post {i + 1}
              </Text>
              <Text
                style={{
                  color: "#f5f5f5",
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
                      name="heart"
                      size={24}
                      color="#f5f5f5"
                      style={{
                        marginRight: 10,
                      }}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity>
                    <AntDesign
                      name="like1"
                      size={24}
                      color="#f5f5f5"
                      style={{
                        marginRight: 10,
                      }}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <AntDesign
                      name="dislike1"
                      size={24}
                      color="#f5f5f5"
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
                  <Ionicons
                    name="share-social-outline"
                    size={24}
                    color="#f5f5f5"
                    style={{
                      marginRight: 10,
                    }}
                  />
                  <Text style={{ color: "#f5f5f5" }}>Share</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
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
    // backgroundColor: "#171717",
    height: "100%",
    width: "100%",
    marginTop: 100,
    padding: 20,
    // alignItems: "center",
    // justifyContent: "center",
  },
});
