import { useState } from "react";
import { Container, VStack, Text, IconButton, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Box, HStack } from "@chakra-ui/react";
import { FaPlay, FaPause, FaForward, FaBackward, FaVolumeUp } from "react-icons/fa";

const Index = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(200); // Assume a fixed duration for simplicity

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (value) => {
    setVolume(value);
  };

  const handleTimeChange = (value) => {
    setCurrentTime(value);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl">Music Player</Text>
        <Box width="100%">
          <Slider aria-label="time-slider" value={currentTime} max={duration} onChange={handleTimeChange}>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </Box>
        <HStack spacing={4}>
          <IconButton aria-label="Previous" icon={<FaBackward />} size="lg" />
          <IconButton aria-label="Play/Pause" icon={isPlaying ? <FaPause /> : <FaPlay />} size="lg" onClick={togglePlayPause} />
          <IconButton aria-label="Next" icon={<FaForward />} size="lg" />
        </HStack>
        <HStack spacing={4} width="100%" alignItems="center">
          <FaVolumeUp />
          <Slider aria-label="volume-slider" value={volume} onChange={handleVolumeChange}>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;