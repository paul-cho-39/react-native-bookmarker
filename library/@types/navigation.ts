import { NativeStackScreenProps, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import type {
   NavigatorScreenParams,
   CompositeScreenProps,
   RouteProp,
} from '@react-navigation/native';
import { BasicBookInfo, Library } from './googleBooks';
import { BaseUserLogProps } from './timerData';
import type { PrimaryData } from '../helper/parsePrimaryBooks';

// TODO // set the parameters as each screen page props set/change
// change the params list here
type MainNavigator = {
   MainTabs: NavigatorScreenParams<TabsParamList>;
   Timer: NavigatorScreenParams<TimerParamsList>;
};

type TabsParamList = {
   Home: NavigatorScreenParams<HomeParamsList>;
   Library: NavigatorScreenParams<LibraryParamsList>;
   Stats: undefined;
};

type TimerParamsList = {
   MainTimer: { uid: string; primaryBookInfo: PrimaryData; params?: BaseUserLogProps };
   TimerSettings: undefined;
   Notes: { params: BaseUserLogProps };
};

type LoginParamsList = {
   Login: undefined;
   Signin: undefined;
   SignUp: undefined;
   PasswordRecovery: undefined;
};

type HomeParamsList = {
   Main: undefined;
   Search: undefined;
   AddBook: { uid: string; library: Library; bookInfo: BasicBookInfo };
   Goals: { uid: string };
   LogLists: { uid: string };
};

type LibraryParamsList = {
   MainLibrary: undefined;
};

// Login navigation props
type SignUpProps = NativeStackScreenProps<LoginParamsList, 'SignUp'>;
type SignInProps = NativeStackScreenProps<LoginParamsList, 'Signin'>;
type RecoveryProps = NativeStackScreenProps<LoginParamsList, 'PasswordRecovery'>;
type LoginProps = NativeStackScreenProps<LoginParamsList, 'Login'>;

// Home props
// this can and likely and will be likely to change by wrapping w/ "Composite"
type AddBookRouteProps = RouteProp<HomeParamsList, 'AddBook'>;
type AddBookNavigationProp = NativeStackScreenProps<HomeParamsList, 'AddBook'>;
type AddBookScreenProps = {
   navigation: AddBookNavigationProp['navigation'];
   route: AddBookRouteProps;
};
type MainHomeProps = NativeStackScreenProps<HomeParamsList, 'Main'>;
type LibraryProps = NativeStackScreenProps<LibraryParamsList, 'MainLibrary'>;
// Home - Search
type SearchProps = NativeStackScreenProps<HomeParamsList, 'Search'>;
type BookScreenNavigationProp = CompositeScreenProps<SearchProps, AddBookNavigationProp>;

// Timer props
type MainNavigatorTimerNavgiationProp = NativeStackNavigationProp<MainNavigator, 'Timer'>;
type TimerScreenRouteProps = {
   route: RouteProp<TimerParamsList, 'MainTimer'>;
};
type MainTimerNavigationProp = NativeStackScreenProps<TimerParamsList, 'MainTimer'>;
type NotesNavigationProp = NativeStackScreenProps<TimerParamsList, 'Notes'>;

// nested types
type TimerNavigationProp = CompositeScreenProps<MainTimerNavigationProp, MainHomeProps>;

export type {
   MainNavigator,
   TabsParamList,
   LoginProps,
   SignUpProps,
   SignInProps,
   RecoveryProps,
   MainHomeProps,
   SearchProps,
   BookScreenNavigationProp,
   AddBookNavigationProp,
   AddBookScreenProps,
   TimerScreenRouteProps,
   TimerNavigationProp,
   MainTimerNavigationProp,
   MainNavigatorTimerNavgiationProp,
   NotesNavigationProp,
   LibraryProps,
   LoginParamsList,
   LibraryParamsList,
   HomeParamsList,
   TimerParamsList,
};
