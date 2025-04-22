import React from 'react';
import { Pressable, TextInput } from 'react-native';

import { Text, View } from '@/components/ui';
import { useTheme } from '@/context/theme-context';

type Props = {
  title: string;
  posterUrl: string;
  setTitle: (t: string) => void;
  setPosterUrl: (t: string) => void;
  handleAdd: () => void;
  goBack: () => void;
};

export function AddMovieForm({
  title,
  posterUrl,
  setTitle,
  setPosterUrl,
  handleAdd,
  goBack,
}: Props) {
  const { isDark } = useTheme();

  return (
    <View className="mt-4 flex-1 items-center justify-start">
      <View className="w-full max-w-md">
        <TextInput
          value={title}
          onChangeText={setTitle}
          placeholder="Movie Title"
          placeholderTextColor={isDark ? '#999' : '#666'}
          className={`mb-4 w-full rounded px-4 py-3 ${
            isDark ? 'bg-[#1C2C2E] text-white' : 'bg-gray-100 text-black'
          }`}
        />
        <TextInput
          value={posterUrl}
          onChangeText={setPosterUrl}
          placeholder="Poster URL"
          placeholderTextColor={isDark ? '#999' : '#666'}
          className={`mb-6 w-full rounded px-4 py-3 ${
            isDark ? 'bg-[#1C2C2E] text-white' : 'bg-gray-100 text-black'
          }`}
        />
        <Pressable
          className="mb-3 self-center rounded bg-cyan-400 px-6 py-3"
          onPress={handleAdd}
        >
          <Text className="text-center font-semibold text-black">Add</Text>
        </Pressable>
        <Pressable
          className="self-center rounded bg-cyan-400 px-6 py-2"
          onPress={goBack}
        >
          <Text className="text-center text-black">Back to Watchlist</Text>
        </Pressable>
      </View>
    </View>
  );
}
