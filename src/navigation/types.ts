
// Importeren van uw NavigatorProps -> StackNavigator/TabNavigator/DrawerNavigator

import { StackScreenProps } from "@react-navigation/stack";

// Per Navigator type -> ParamsList type maken -> Stack/Drawer/Tab
export type CoursesStackParamsList = {
    // undefined als type -> omdat er in dit scherm geen params binnen komen
    HomeScreen: undefined,
    DetailsScreen: { course: { courseId: number; name: string; } },
    AddCourseScreen: undefined,
}

export type CourseScreenProps<T extends keyof CoursesStackParamsList> = StackScreenProps<CoursesStackParamsList, T>;


declare global {
    namespace ReactNavigation {
        interface RootParamList extends CoursesStackParamsList {}
    }
}



