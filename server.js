import app from './src/app.js';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('🚀 Server is flying on port ' + PORT);
  console.log('✅ Check health at: http://localhost:' + PORT + '/api/health');
});
