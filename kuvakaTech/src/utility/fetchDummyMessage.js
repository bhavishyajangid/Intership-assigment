const dummyMessage = Array.from({ length: 100 }).map((_, i) => ({
  id: i + 1,
  sender: i % 2 === 0 ? "user" : "ai",
  text: `Message ${i + 1}`,
  time: new Date().toISOString(),
}));

export default dummyMessage