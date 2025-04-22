import React from 'react';
import { Image, Switch } from 'react-native';

import { Text, View } from '@/components/ui';
import { useTheme } from '@/context/theme-context';

type Props = {
  title: string;
  posterUrl: string;
  watched: boolean;
  onToggle: () => void;
};

export function MovieCard({ title, posterUrl, watched, onToggle }: Props) {
  const { isDark } = useTheme();

  return (
    <View
      className={`mb-5 items-center rounded border p-4 ${
        isDark ? 'border-cyan-400 bg-[#1A1A1A]' : 'border-gray-300 bg-gray-100'
      }`}
    >
      <Text className={`mb-2 text-xl ${isDark ? 'text-white' : 'text-black'}`}>
        {title}
      </Text>
      <Image
        source={{ uri: posterUrl }}
        className="mb-3 h-52 w-40 bg-gray-300"
        resizeMode="cover"
      />
      <View className="flex-row items-center space-x-5">
        <Text
          className={`text-m mr-5 font-semibold tracking-wider ${
            isDark ? 'text-white' : 'text-black'
          }`}
        >
          WATCHED
        </Text>
        <Switch
          value={watched}
          onValueChange={onToggle}
          thumbColor={watched ? '#00E6F6' : '#ccc'}
        />
      </View>
    </View>
  );
}
