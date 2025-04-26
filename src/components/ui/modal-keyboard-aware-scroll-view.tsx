import {
  type BottomSheetScrollViewMethods,
  createBottomSheetScrollableComponent,
  SCROLLABLE_TYPE,
} from '@gorhom/bottom-sheet';
import { type BottomSheetScrollViewProps } from '@gorhom/bottom-sheet/src/components/bottomSheetScrollable/types';
import { memo } from 'react';
import { ScrollView } from 'react-native';
import Reanimated from 'react-native-reanimated';

const AnimatedScrollView = Reanimated.createAnimatedComponent(ScrollView);

const BottomSheetScrollViewComponent = createBottomSheetScrollableComponent<
  BottomSheetScrollViewMethods,
  BottomSheetScrollViewProps
>(SCROLLABLE_TYPE.SCROLLVIEW, AnimatedScrollView);

const BottomSheetKeyboardAwareScrollView = memo(BottomSheetScrollViewComponent);

BottomSheetKeyboardAwareScrollView.displayName =
  'BottomSheetKeyboardAwareScrollView';

export default BottomSheetKeyboardAwareScrollView;