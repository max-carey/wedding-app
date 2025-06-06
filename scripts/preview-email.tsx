import { render } from '@react-email/render';
import WeddingEmail from '../emails/WeddingEmail';
import fs from 'fs';
import path from 'path';

const preview = async () => {
  const emailHtml = await render(
    WeddingEmail({
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com',
    })
  );

  const outputPath = path.join(process.cwd(), 'preview.html');
  fs.writeFileSync(outputPath, emailHtml);
  console.log(`Email preview generated at: ${outputPath}`);
};

preview(); 