
// Importeren van uw NavigatorProps -> StackNavigator/TabNavigator/DrawerNavigator

import { StackScreenProps } from "@react-navigation/stack";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { DrawerScreenProps } from "@react-navigation/drawer"; 

// Per Navigator type -> ParamsList type maken -> Stack/Drawer/Tab
export type CoursesStackParamsList = {
    // undefined als type -> omdat er in dit scherm geen params binnen komen
    HomeScreen: undefined,
    DetailsScreen: { course: { courseId: number; name: string; } },
    AddCourseScreen: undefined,
}

export type ParkingsStackParamsList = {
    parkings: undefined,
    parkingsweb: { url: string; },
}

export type TabParamsList = {
    // undefined als type -> omdat er in dit scherm geen params binnen komen
    TabHomeScreen: undefined,
    SettingsScreen: undefined,
}

export type DrawerParamsList = {
    // undefined als type -> omdat er in dit scherm geen params binnen komen
    DrawerSettings: undefined,
    AboutScreen: undefined
}

// Typen van uw useNavigation en uw useRoute hook
export type CourseScreenProps<T extends keyof CoursesStackParamsList> = StackScreenProps<CoursesStackParamsList, T>;
export type ParkingsScreenProps<T extends keyof ParkingsStackParamsList> = StackScreenProps<ParkingsStackParamsList, T>;
export type TabProps<T extends keyof TabParamsList> = BottomTabScreenProps<TabParamsList, T>;
export type DrawerProps<T extends keyof DrawerParamsList> = DrawerScreenProps<DrawerParamsList, T>;


declare global {
    namespace ReactNavigation {
        interface RootParamList extends CoursesStackParamsList {}
    }
}



