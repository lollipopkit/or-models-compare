const https = require('https');
const fs = require('fs');

function fetchModels() {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'openrouter.ai',
      path: '/api/v1/models',
      method: 'GET',
      headers: {
        'User-Agent': 'OpenRouter-Models-Dashboard/1.0'
      }
    };

    const req = https.request(options, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        try {
          const jsonData = JSON.parse(data);
          resolve(jsonData);
        } catch (error) {
          reject(new Error('Invalid JSON response: ' + error.message));
        }
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    req.setTimeout(30000, () => {
      req.destroy();
      reject(new Error('Request timeout'));
    });

    req.end();
  });
}

async function main() {
  try {
    console.log('Fetching models data...');
    const modelsData = await fetchModels();
    
    // 添加最后更新时间
    const outputData = {
      ...modelsData,
      lastUpdate: new Date().toISOString(),
      generatedBy: 'GitHub Actions',
      totalModels: modelsData.data ? modelsData.data.length : 0
    };
    
    // 保存到文件
    fs.writeFileSync('models-data.json', JSON.stringify(outputData, null, 2));
    
    console.log(`✅ Successfully fetched ${outputData.totalModels} models`);
    console.log(`📝 Data saved to models-data.json`);
    
    // 输出一些统计信息用于日志
    if (modelsData.data && modelsData.data.length > 0) {
      const freeModels = modelsData.data.filter(m => 
        parseFloat(m.pricing?.prompt || 0) === 0
      ).length;
      
      const paidModels = modelsData.data.length - freeModels;
      
      console.log(`📊 Statistics:`);
      console.log(`   - Total models: ${modelsData.data.length}`);
      console.log(`   - Free models: ${freeModels}`);
      console.log(`   - Paid models: ${paidModels}`);
      
      // 找出最高和最低价格
      const prices = modelsData.data
        .map(m => parseFloat(m.pricing?.prompt || 0))
        .filter(p => p > 0)
        .sort((a, b) => a - b);
      
      if (prices.length > 0) {
        console.log(`   - Lowest price: $${prices[0]}`);
        console.log(`   - Highest price: $${prices[prices.length - 1]}`);
      }
    }
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

main();
