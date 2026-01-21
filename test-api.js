// Test API endpoint
async function testAPI() {
  console.log('🧪 Testing Contact Form API...\n');

  const testData = {
    name: 'Test User',
    phone: '054-123-4567',
  };

  console.log('Test data:', testData);
  console.log('Sending request to: http://localhost:3000/api/contact\n');

  try {
    const response = await fetch('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData),
    });

    console.log('Status:', response.status, response.statusText);

    const data = await response.json();
    console.log('Response:', data);

    if (response.ok) {
      console.log('\n✅ API test successful!');
      console.log('📧 Check vadim.tkach1378@gmail.com for the test email');
    } else {
      console.log('\n❌ API test failed');
      console.log('Error:', data.error);
    }

  } catch (error) {
    console.error('❌ Error:', error.message);
    console.log('\n💡 Make sure:');
    console.log('1. Dev server is running (pnpm dev)');
    console.log('2. Server is running on port 3000');
    console.log('3. You restarted the server after updating .env.local');
  }
}

testAPI();
