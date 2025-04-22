import { useRouter } from 'expo-router';
import { Moon, Sun } from 'lucide-react-native';
import React, { useState } from 'react';

import { AddMovieForm } from '@/components/add-movie-form';
import { Pressable, Text, View } from '@/components/ui';
import { useTheme } from '@/context/theme-context';
import { useMovieStore } from '@/store/use-movie-store';

export default function AddMovie() {
  const router = useRouter();
  const { isDark, toggleTheme } = useTheme();
  const { addMovie } = useMovieStore();

  const [title, setTitle] = useState('');
  const [posterUrl, setPosterUrl] = useState('');

  const handleAdd = () => {
    const newMovie = {
      id: Date.now(),
      title,
      posterUrl,
      watched: false,
    };

    addMovie(newMovie);
    router.back();
  };

  return (
    <View className={`flex-1 px-6 ${isDark ? 'bg-[#0C1C1E]' : 'bg-white'}`}>
      <View className="mb-4 w-full items-start pl-4 pt-20">
        <Pressable onPress={toggleTheme} className="mt-2 p-2">
          {isDark ? (
            <Sun color="#00E6F6" size={24} />
          ) : (
            <Moon color="#00E6F6" size={24} />
          )}
        </Pressable>
      </View>

      <Text
        className={`mb-8 text-center text-4xl font-bold ${isDark ? 'text-cyan-400' : 'text-black'}`}
      >
        WatchList
      </Text>

      <AddMovieForm
        title={title}
        posterUrl={posterUrl}
        setTitle={setTitle}
        setPosterUrl={setPosterUrl}
        handleAdd={handleAdd}
        goBack={() => router.back()}
      />
    </View>
  );
}
