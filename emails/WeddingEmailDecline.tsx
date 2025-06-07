import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
  Row,
  Column,
  Hr,
} from '@react-email/components';
import * as React from 'react';

interface WeddingEmailProps {
  firstName: string;
  lastName: string;
  email: string;
}

export const WeddingEmailDecline = ({
  firstName,
  lastName,
  email,
}: WeddingEmailProps) => {
  const event = {
    title: "Boda de Lili y Max, 14 de febrero del 2026",
    description: "Boda de Lili y Max, 14 de febrero del 2026",
    locationCeremonia: "Calle Gral. Prim 32, Juárez, Cuauhtémoc, 06600 Ciudad de México, CDMX",
    locationBanquete: "Calle Gral. Prim 32, Juárez, Cuauhtémoc, 06600 Ciudad de México, CDMX",
    startTime: "2026-02-14T12:00:00",
    endTime: "2026-02-14T13:00:00",
    contacts: {
      lili: process.env.NEXT_PUBLIC_LILI_CONTACT,
      max: process.env.NEXT_PUBLIC_MAX_CONTACT
    },
  };

  const previewText = `Thank you for your response, ${firstName}!`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={header}>
            <Img
              src="https://www.bodalilimax.com/email-assets/logo_white.png"
              width="220"
              height="220"
              alt="Wedding Logo"
              style={logo}
            />
          </Section>

          <Section style={content}>
            {/* English Section */}
            <Heading style={heading}>Thank you, {firstName} {lastName}!</Heading>
            
            <Text style={paragraph}>
              We appreciate you taking the time to respond to our wedding invitation. While we're saddened that you won't be able to join us on our special day, we understand and respect your decision.
            </Text>

            <Text style={paragraph}>
              We hope to celebrate with you on another occasion and will be sure to share photos and memories from our wedding day.
            </Text>

            <Section style={contactsSection}>
              <Heading as="h2" style={subheading}>Stay Connected</Heading>
              
              <Text style={detailText}>
                If you'd like to stay updated about our wedding or future celebrations, you can reach us at:
              </Text>
              
              <Text style={detailText}>
                <strong>Contact Lili:</strong> {event.contacts.lili}
              </Text>
              
              <Text style={detailText}>
                <strong>Contact Max:</strong> {event.contacts.max}
              </Text>
            </Section>

            <Hr style={hr} />

            {/* Spanish Section */}
            <Section style={spanishSection}>
              <Heading as="h2" style={subheading}>¡Gracias, {firstName} {lastName}!</Heading>
              
              <Text style={paragraph}>
                Agradecemos que te hayas tomado el tiempo para responder a nuestra invitación. Aunque nos entristece que no puedas acompañarnos en nuestro día especial, entendemos y respetamos tu decisión.
              </Text>

              <Text style={paragraph}>
                Esperamos celebrar contigo en otra ocasión y nos aseguraremos de compartir fotos y recuerdos de nuestra boda.
              </Text>

              <Section style={contactsSection}>
                <Heading as="h2" style={subheading}>Mantente Conectado</Heading>
                
                <Text style={detailText}>
                  Si deseas mantenerte actualizado sobre nuestra boda o futuras celebraciones, puedes contactarnos en:
                </Text>
                
                <Text style={detailText}>
                  <strong>Contactar a Lili:</strong> {event.contacts.lili}
                </Text>
                
                <Text style={detailText}>
                  <strong>Contactar a Max:</strong> {event.contacts.max}
                </Text>
              </Section>
            </Section>
          </Section>

          <Section style={footer}>
            <Text style={footerText}>
              © 2025 Lili & Max Wedding. All rights reserved.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default WeddingEmailDecline;

const main = {
  backgroundColor: '#F6F6E9',
  fontFamily:
    'Georgia, "Times New Roman", Times, serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
};

const header = {
  padding: '24px 48px',
  textAlign: 'center' as const,
};

const logo = {
  margin: '0 auto',
};

const content = {
  padding: '24px 48px',
};

const heading = {
  fontSize: '24px',
  letterSpacing: '-0.5px',
  lineHeight: '1.3',
  fontWeight: '400',
  color: '#484848',
  padding: '17px 0 0',
  fontFamily: 'Georgia, "Times New Roman", Times, serif',
};

const subheading = {
  fontSize: '20px',
  letterSpacing: '-0.5px',
  lineHeight: '1.3',
  fontWeight: '400',
  color: '#484848',
  padding: '17px 0 0',
  fontFamily: 'Georgia, "Times New Roman", Times, serif',
};

const paragraph = {
  margin: '0',
  fontSize: '16px',
  lineHeight: '24px',
  color: '#484848',
  fontFamily: 'Georgia, "Times New Roman", Times, serif',
};

const detailsSection = {
  marginTop: '32px',
};

const contactsSection = {
  marginTop: '32px',
};

const detailText = {
  margin: '0',
  fontSize: '16px',
  lineHeight: '24px',
  color: '#484848',
  fontFamily: 'Georgia, "Times New Roman", Times, serif',
};

const hr = {
  borderColor: '#e6ebf1',
  margin: '32px 0',
};

const spanishSection = {
  marginTop: '32px',
};

const footer = {
  padding: '24px 48px',
  textAlign: 'center' as const,
  borderTop: '1px solid #e6ebf1',
};

const footerText = {
  margin: '0',
  fontSize: '14px',
  lineHeight: '24px',
  color: '#8898aa',
  fontFamily: 'Arial, Helvetica, sans-serif',
}; 