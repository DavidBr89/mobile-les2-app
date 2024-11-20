import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

import {
  ContactResponse,
  Fields,
  getContactsAsync,
  PermissionResponse,
  requestPermissionsAsync,
} from "expo-contacts";

const ContactsScreen = () => {
  const [status, setStatus] = useState<PermissionResponse>();
  const [contacts, setContacts] = useState<ContactResponse>();

  useEffect(() => {
    const fetchContacts = async () => {
      const permissionStatus = await requestPermissionsAsync();
      setStatus(permissionStatus);

      const results = await getContactsAsync({
        fields: [],
      });
      setContacts(results);
    };

    fetchContacts();
  }, []);

  if (!status?.granted) {
    return <Text>Geen permissie.</Text>;
  }

  return (
    <View>
      {contacts?.data.map((c) => (
        <Text key={c.id}>{c.name}</Text>
      ))}
    </View>
  );
};

export default ContactsScreen;

const styles = StyleSheet.create({});
