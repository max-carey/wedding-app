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

export const WeddingEmail = ({
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

  const previewText = `Welcome to our wedding, ${firstName}!`;

  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&family=Marcellus&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.cdnfonts.com/css/tan-pearl"
          rel="stylesheet"
        />
      </Head>
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
            <Heading style={heading}>Welcome, {firstName} {lastName}!</Heading>
            
            <Text style={paragraph}>
              You have successfully registered for our wedding day.
            </Text>

            <Section style={detailsSection}>
              <Heading as="h2" style={subheading}>Event Details</Heading>
              
              <Text style={detailText}>
                <strong>Lili & Max Wedding, 14th February 2026</strong>
              </Text>
              
              <Text style={detailText}>
                <strong>Ceremony Location:</strong> {event.locationCeremonia}
              </Text>
              
              <Text style={detailText}>
                <strong>Reception Location:</strong> {event.locationBanquete}
              </Text>
            </Section>

            <Section style={contactsSection}>
              <Heading as="h2" style={subheading}>Contacts</Heading>
              
              <Text style={detailText}>
                For any questions, you can contact us at these phone numbers:
              </Text>
              
              <Text style={detailText}>
                <strong>Contact Lili:</strong> {event.contacts.lili}
              </Text>
              
              <Text style={detailText}>
                <strong>Contact Max:</strong> {event.contacts.max}
              </Text>
            </Section>

            {/* Photo Gallery Section */}
            <Section style={gallerySection}>
              <Heading as="h2" style={subheading}>Our Story in Pictures</Heading>
              <Row style={galleryRow}>
                <Column style={galleryColumn}>
                  <Img
                    src="https://www.bodalilimax.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmichoacan.6ac78e5d.jpg&w=3840&q=75"
                    alt="Michoacan"
                    style={galleryImage}
                  />
                </Column>
                <Column style={galleryColumn}>
                  <Img
                    src="https://www.bodalilimax.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fteotihuacan.912cd207.jpg&w=3840&q=75"
                    alt="Teotihuacan"
                    style={galleryImage}
                  />
                </Column>
                <Column style={galleryColumn}>
                  <Img
                    src="https://www.bodalilimax.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fengagement_party.fd545b71.jpg&w=3840&q=75"
                    alt="Engagement Party"
                    style={galleryImage}
                  />
                </Column>
              </Row>
            </Section>

            <Hr style={hr} />

            {/* Spanish Section */}
            <Section style={spanishSection}>
              <Heading as="h2" style={subheading}>¡Bienvenido, {firstName} {lastName}!</Heading>
              
              <Text style={paragraph}>
                Te has registrado exitosamente para el día de nuestra boda.
              </Text>

              <Section style={detailsSection}>
                <Heading as="h2" style={subheading}>Detalles del Evento</Heading>
                
                <Text style={detailText}>
                  <strong>{event.title}</strong>
                </Text>
                
                <Text style={detailText}>
                  <strong>Ceremonia:</strong> {event.locationCeremonia}
                </Text>
                
                <Text style={detailText}>
                  <strong>Banquete:</strong> {event.locationBanquete}
                </Text>
              </Section>

              <Section style={contactsSection}>
                <Heading as="h2" style={subheading}>Contactos</Heading>
                
                <Text style={detailText}>
                  Para cualquier duda puedes contactarnos a estos números de teléfono:
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

export default WeddingEmail;

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

const gallerySection = {
  marginTop: '32px',
};

const galleryRow = {
  display: 'flex',
  flexDirection: 'row' as const,
  justifyContent: 'space-between',
  margin: '0 -8px',
};

const galleryColumn = {
  flex: '1',
  padding: '0 8px',
};

const galleryImage = {
  width: '100%',
  borderRadius: '8px',
  marginBottom: '16px',
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