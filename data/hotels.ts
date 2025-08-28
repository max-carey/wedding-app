export interface Hotel {
  name: string;
  url: string;
}

export interface HotelData {
  [neighborhood: string]: Hotel[];
}

export const hotelsES: HotelData = {
  Roma: [
    { name: "Kukun Tonalá 121", url: "https://staykukun.com/es/complex/Tonalá%20121" },
    { name: "Kukun Casa Tonalá 30", url: "https://staykukun.com/es/complex/Tonalá%2030" },
    { name: "Kukun Alure", url: "https://staykukun.com/es/complex/Alure" },
    { name: "Kukun Colima", url: "https://staykukun.com/es/complex/Colima" },
    { name: "Mr. W", url: "https://www.reservas-mrw.com" },
    { name: "Airbnb", url: "https://www.airbnb.mx/s/Roma-Norte--Ciudad-de-México--C.D.Mx.--México/homes?refinement_paths%5B%5D=%2Fhomes&acp_id=09431e54-ae41-41d4-874c-01fa676b7cb9&date_picker_type=calendar&source=structured_search_input_header&search_type=autocomplete_click&flexible_trip_lengths%5B%5D=one_week&price_filter_input_type=2&price_filter_num_nights=7&channel=EXPLORE&guest_favorite=true&selected_filter_order%5B%5D=guest_favorite%3Atrue&update_selected_filters=false&zoom_level=14&place_id=ChIJzeSi8jn_0YURMiXDZ-gzmi0&location_bb=QZtoJcLGTqxBm0icwsZafg%3D%3D" }
  ],
  Condesa: [
    { name: "Kukun Taman", url: "https://staykukun.com/es/complex/Taman" },
    { name: "Kukun Amsterdam 185", url: "https://staykukun.com/es/complex/Amsterdam%20185" },
    { name: "Tenancingo 16", url: "https://staykukun.com/es/complex/Tenancingo%2016" },
    { name: "Mr W Moderno apartamento", url: "https://www.airbnb.mx/rooms/1039403393931105822?adults=6&check_in=2026-02-11&check_out=2026-02-18&search_mode=regular_search&source_impression_id=p3_1754683494_P3WppNhbrs9fNG1Z&previous_page_section_name=1000&federated_search_id=8e6c87d6-9c80-4767-a783-c1a3bd071cbc" }
  ],
  Reforma: [
    { name: "Kukun Reforma and Downtown", url: "https://staykukun.com/es/cdmx/property/Kukun_Reforma__n__Downtown/J35B214" },
    { name: "Kukun Reforma 222", url: "https://staykukun.com/es/complex/Reforma%20222" },
    { name: "Kukun Grand Chapultepec", url: "https://staykukun.com/es/complex/Grand%20Chapultepec" }
  ],
  Juárez: [
    { name: "Londres 208", url: "https://staykukun.com/es/complex/Londres%20208" },
    { name: "Magenta", url: "https://staykukun.com/es/complex/Magenta" },
    { name: "Kukun Casa Reforma 222 Hamburgo", url: "https://staykukun.com/es/complex/Reforma%20222%20Hamburgo" }
  ]
};

export const hotelsEN: HotelData = {
  Roma: [
    { name: "Colima 71", url: "https://www.colima71.com/es" },
    { name: "Casa Tenue", url: "https://casatenue.mx" },
    { name: "Casa Cibeles", url: "https://www.casacibeles.com.mx" },
    { name: "Casa Oliva", url: "https://casaolivamx.com" }
  ],
  Condesa: [
    { name: "Casa Cuenca", url: "https://casacuenca.mx" },
    { name: "Octavia Casa", url: "https://octaviacasa.mx/#index" },
    { name: "Crisol Suites Condesa", url: "https://www.eurostarshotels.com/crisol-suites-condesa.html?referer_code=bs1gg15ww&gad_source=1&gad_campaignid=22618223506&gbraid=0AAAAAD-VyO4yrugkV0mQdPoWXGmicrACN&gclid=Cj0KCQjw18bEBhCBARIsAKuAFEblf-WIaS3nalA5QZWXxiiYJFQFIT3SzPueOlppldv707rSfGk_IaQaAgw_EALw_wcB" },
    { name: "Casa Luciana Condesa", url: "https://lucianacondesainfo.com.mx" }
  ],
  Reforma: [
    { name: "Sofitel Mexico City Reforma", url: "https://www.sofitel-mexico-city.com/rooms-suites/" },
    { name: "Sheraton Mexico City", url: "https://www.marriott.com/es/hotels/mexis-sheraton-mexico-city-maria-isabel-hotel" },
    { name: "Barceló Mexico Reforma", url: "https://www.barcelo.com/es-mx/barcelo-mexico-reforma/" },
    { name: "NH Collection Mexico City Reforma", url: "https://www.nh-collection.com/es/hotel/nh-collection-mexico-city-reforma" }
  ],
  Polanco: [
    { name: "Las Alcobas", url: "https://www.lasalcobas.com/?gclsrc=aw.ds&gad_source=1&gad_campaignid=21003125949&gbraid=0AAAAAqyfUqzN7swBV405PeYKbl83hZtgW&gclid=Cj0KCQjw18bEBhCBARIsAKuAFEbc4bYoe9eddrBU2kHftra2-KnLSVtLpa4nGt6q5I0ukoa0acmXuC8aAjyyEALw_wcB" },
    { name: "JW Marriott", url: "https://www.marriott.com/es/hotels/mexjw-jw-marriott-hotel-mexico-city/overview/" },
    { name: "Presidente Intercontinental", url: "https://presidenteicmexico.com" },
    { name: "Hyatt Regency Mexico City", url: "https://www.hyatt.com/hyatt-regency/es-ES/mexhr-hyatt-regency-mexico-city" }
  ]
};