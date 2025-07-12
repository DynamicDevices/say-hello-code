const fs = require('fs');

try {
  // Read the languages file
  const languagesContent = fs.readFileSync('js/languages.js', 'utf8');
  
  // Extract all language names using regex
  const nameMatches = languagesContent.match(/"name":\s*"([^"]+)"/g);
  
  if (!nameMatches) {
    console.error('❌ Could not find any language names in js/languages.js');
    console.error('File content preview:');
    console.error(languagesContent.substring(0, 500));
    process.exit(1);
  }
  
  // Extract just the names
  const names = nameMatches.map(match => {
    const nameMatch = match.match(/"name":\s*"([^"]+)"/);
    return nameMatch ? nameMatch[1] : null;
  }).filter(name => name !== null);
  
  console.log(`📊 Total languages found: ${names.length}`);
  
  // Check for duplicates by name
  const seen = {};
  const duplicates = [];
  
  names.forEach((name, index) => {
    const normalizedName = name.toLowerCase().trim()
      .replace(/\s+/g, '') // Remove spaces
      .replace(/[^\w#\+\-\.]/g, ''); // Remove special characters but keep #, +, -, .
    
    if (seen[normalizedName]) {
      duplicates.push({
        name: name,
        index: index,
        original: seen[normalizedName]
      });
    } else {
      seen[normalizedName] = { name: name, index: index };
    }
  });
  
  if (duplicates.length > 0) {
    console.error('❌ Found duplicate languages:');
    duplicates.forEach(dup => {
      console.error(`   - "${dup.name}" (index ${dup.index}) duplicates "${dup.original.name}" (index ${dup.original.index})`);
    });
    console.error(`\nTotal duplicates found: ${duplicates.length}`);
    process.exit(1);
  } else {
    console.log('✅ No duplicate languages found');
  }
  
  // Check for languages with same name but different casing
  const caseInsensitiveSeen = {};
  const caseDuplicates = [];
  
  names.forEach((name, index) => {
    const lowerName = name.toLowerCase();
    
    if (caseInsensitiveSeen[lowerName] && caseInsensitiveSeen[lowerName] !== name) {
      caseDuplicates.push({
        name: name,
        original: caseInsensitiveSeen[lowerName],
        index: index
      });
    } else {
      caseInsensitiveSeen[lowerName] = name;
    }
  });
  
  if (caseDuplicates.length > 0) {
    console.warn('⚠️  Found languages with same name but different casing:');
    caseDuplicates.forEach(dup => {
      console.warn(`   - "${dup.name}" vs "${dup.original}"`);
    });
  }
  
  console.log(`✅ Successfully validated ${names.length} unique languages`);
  
} catch (error) {
  console.error('❌ Error checking for duplicates:', error.message);
  console.error('Stack trace:', error.stack);
  process.exit(1);
} 