import { Link } from 'expo-router';
import { Moon, Sun } from 'lucide-react-native';
import React from 'react';
import { Pressable, ScrollView } from 'react-native';

import { MovieCard } from '@/components/movie-card';
import { Text, View } from '@/components/ui';
import { useTheme } from '@/context/theme-context';
import { useMovieStore } from '@/store/use-movie-store';

export default function WatchListScreen() {
  const { isDark, toggleTheme } = useTheme();
  const { movies, removeMovie } = useMovieStore();

  const toggleWatched = (id: number) => {
    removeMovie(id);
  };

  return (
    <View
      className={`flex-1 px-4 py-6 ${isDark ? 'bg-[#0C1C1E]' : 'bg-white'}`}
    >
      <View className="mb-4 w-full items-start pl-4 pt-10">
        <Pressable onPress={toggleTheme} className="mt-2 p-2">
          {isDark ? (
            <Sun color="#00E6F6" size={24} />
          ) : (
            <Moon color="#00E6F6" size={24} />
          )}
        </Pressable>
      </View>

      <View className="mb-6 items-center">
        <Text
          className={`mb-5 pb-4 pt-6 text-4xl font-bold ${isDark ? 'text-cyan-400' : 'text-black'}`}
        >
          WatchList
        </Text>

        <Link href="/add-movie" asChild>
          <Pressable className="mb-5 rounded bg-cyan-400 px-4 py-2">
            <Text className="font-semibold text-black">Add Movie</Text>
          </Pressable>
        </Link>
      </View>

      <ScrollView className="space-y-6">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            posterUrl={movie.posterUrl}
            watched={movie.watched}
            onToggle={() => toggleWatched(movie.id)}
          />
        ))}
      </ScrollView>
    </View>
  );
}
