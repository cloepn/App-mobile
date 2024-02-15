import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const FunnyGame = () => {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);
  const [gameActive, setGameActive] = useState(false);
  const [lastResult, setLastResult] = useState(null);

  useEffect(() => {
    let timer;

    if (gameActive && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [gameActive, timeLeft]);

  const startGame = () => {
    setGameActive(true);
    setTimeLeft(15);
    setScore(0);
  };

  const increaseScore = () => {
    if (gameActive) {
      setScore(score + 1);
    }
  };

  const endGame = () => {
    setGameActive(false);
    setLastResult({ score, timeLeft });
  };

  const resetGame = () => {
    setGameActive(false);
    setScore(0);
    setTimeLeft(15);
    setLastResult(null);
  };

  const calculateTimePercentage = () => {
    return (timeLeft / 15) * 100;
  };

  const renderEndMessage = () => {
    if (timeLeft === 0 && gameActive) {
      return (
        <View style={styles.endMessageContainer}>
          <Text style={styles.endMessageText}>BRAVO BG CONTINUE COMME CA</Text>
        </View>
      );
    }
  };

  const renderLastResult = () => {
    if (lastResult) {
      return (
        <View style={styles.lastResultContainer}>
          <Text style={styles.lastResultText}>
            Dernier résultat: Score {lastResult.score}, Temps restant {lastResult.timeLeft}s
          </Text>
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.timerText}>{timeLeft}s</Text>
      <View style={styles.timeBarContainer}>
        <View style={[styles.timeBar, { width: `${calculateTimePercentage()}%` }]} />
      </View>
      <Text style={styles.scoreText}>Score: {score}</Text>
      <TouchableOpacity style={styles.button} onPress={increaseScore} disabled={!gameActive}>
        <Text style={styles.buttonText}>Appuie-moi !</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.resetButton} onPress={resetGame}>
        <Text style={styles.buttonText}>Réinitialiser</Text>
      </TouchableOpacity>
      {!gameActive && (
        <TouchableOpacity style={styles.startButton} onPress={startGame}>
          <Text style={styles.buttonText}>Commencer</Text>
        </TouchableOpacity>
      )}
      {renderEndMessage()}
      {renderLastResult()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFB6C1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timerText: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 10,
  },
  timeBarContainer: {
    height: 20,
    width: '60%',
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    overflow: 'hidden',
  },
  timeBar: {
    height: '100%',
    backgroundColor: '#e74c3c',
    borderRadius: 10,
  },
  scoreText: {
    fontSize: 32,
    color: '#fff',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#FFD3E0',
    padding: 20,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resetButton: {
    backgroundColor: '#D81B60',
    padding: 20,
    borderRadius: 10,
    marginTop: 10,
  },
  startButton: {
    backgroundColor: '#FF1493',
    padding: 20,
    borderRadius: 10,
    marginTop: 10,
  },
  endMessageContainer: {
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 20,
    borderRadius: 10,
    alignSelf: 'center',
    top: '50%',
    marginTop: -40,
  },
  endMessageText: {
    fontSize: 18,
    color: '#FF1493',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  lastResultContainer: {
    marginTop: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 20,
    borderRadius: 10,
  },
  lastResultText: {
    fontSize: 16,
    color: '#FF1493',
    textAlign: 'center',
  },
});

export default FunnyGame;