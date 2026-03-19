const fs = require('fs');
const path = require('path');

// FAQ files mapping
const faqFiles = [
  {
    pagePath: 'src/app/services/debt-consolidation/page.tsx',
    faqPath: 'src/app/services/debt-consolidation/DebtFAQ/DebtFAQ.tsx',
    url: 'https://avi-mashkanta.com/services/debt-consolidation'
  },
  {
    pagePath: 'src/app/services/dira-behanacha-mortgage/page.tsx',
    faqPath: 'src/app/services/dira-behanacha-mortgage/components/DiraFAQ/DiraFAQ.tsx',
    url: 'https://avi-mashkanta.com/services/dira-behanacha-mortgage'
  },
  {
    pagePath: 'src/app/services/foreign-mortgages/page.tsx',
    faqPath: 'src/app/services/foreign-mortgages/components/ForeignFAQ/ForeignFAQ.tsx',
    url: 'https://avi-mashkanta.com/services/foreign-mortgages'
  },
  {
    pagePath: 'src/app/services/loan-consolidation/page.tsx',
    faqPath: 'src/app/services/loan-consolidation/ConsultantFAQ/ConsultantFAQ.tsx',
    url: 'https://avi-mashkanta.com/services/loan-consolidation'
  },
  {
    pagePath: 'src/app/services/mortgage-refused/page.tsx',
    faqPath: 'src/app/services/mortgage-refused/components/RefusedFAQ/RefusedFAQ.tsx',
    url: 'https://avi-mashkanta.com/services/mortgage-refused'
  },
  {
    pagePath: 'src/app/services/renovation-mortgage/page.tsx',
    faqPath: 'src/app/services/renovation-mortgage/components/RenovationFAQ/RenovationFAQ.tsx',
    url: 'https://avi-mashkanta.com/services/renovation-mortgage'
  },
  {
    pagePath: 'src/app/services/reverse-mortgage/page.tsx',
    faqPath: 'src/app/services/reverse-mortgage/components/ReverseFAQ/ReverseFAQ.tsx',
    url: 'https://avi-mashkanta.com/services/reverse-mortgage'
  }
];

// Extract FAQ items from a file
function extractFAQItems(content) {
  const faqItemsMatch = content.match(/const\s+faqItems\s*=\s*\[([\s\S]*?)\];/);
  if (!faqItemsMatch) return null;

  const itemsString = faqItemsMatch[1];
  const items = [];

  // Match each FAQ item
  const itemRegex = /\{\s*question:\s*["'](.*?)["'],\s*answer:\s*["'](.*?)["']\s*\}/gs;
  let match;

  while ((match = itemRegex.exec(itemsString)) !== null) {
    items.push({
      question: match[1],
      answer: match[2]
    });
  }

  return items;
}

// Add FAQ schema to page
function addFAQSchemaToPage(pagePath, faqItems) {
  const content = fs.readFileSync(pagePath, 'utf8');

  // Check if FAQ schema already exists
  if (content.includes('"@type": "FAQPage"')) {
    console.log(`✓ FAQ schema already exists in ${pagePath}`);
    return false;
  }

  // Find the closing of the @graph array
  const graphEndRegex = /(\s*)\]\s*\};(\s*return)/;
  const match = content.match(graphEndRegex);

  if (!match) {
    console.log(`✗ Could not find @graph in ${pagePath}`);
    return false;
  }

  const indent = match[1];
  const faqSchema = {
    "@type": "FAQPage",
    mainEntity: faqItems.map(item => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };

  const faqSchemaString = JSON.stringify(faqSchema, null, 2)
    .split('\n')
    .map((line, index) => index === 0 ? `${indent}  ${line}` : `${indent}  ${line}`)
    .join('\n');

  const newContent = content.replace(
    graphEndRegex,
    `,\n${faqSchemaString}\n${indent}]${indent}};${match[2]}`
  );

  fs.writeFileSync(pagePath, newContent, 'utf8');
  console.log(`✓ Added FAQ schema to ${pagePath}`);
  return true;
}

// Main execution
console.log('Adding FAQ schemas to service pages...\n');

faqFiles.forEach(({ pagePath, faqPath }) => {
  try {
    const faqContent = fs.readFileSync(faqPath, 'utf8');
    const faqItems = extractFAQItems(faqContent);

    if (!faqItems || faqItems.length === 0) {
      console.log(`✗ No FAQ items found in ${faqPath}`);
      return;
    }

    console.log(`Found ${faqItems.length} FAQ items in ${faqPath}`);
    addFAQSchemaToPage(pagePath, faqItems);

  } catch (error) {
    console.log(`✗ Error processing ${pagePath}:`, error.message);
  }
});

console.log('\nDone!');
