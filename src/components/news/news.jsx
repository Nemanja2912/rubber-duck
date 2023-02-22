import Image1 from "../../assets/image/news/agency-logo.jpg";
import Image2 from "../../assets/image/news/eu_flag_1.jpg";
import Image3 from "../../assets/image/news/logo-en-right-no-back.png";

const News = () => {
  return (
    <div className="mt-20">
      <NewsSection
        title="Procedure BG16RFOP002-2.083"
        subtitle="Participation in procedure BG16RFOP002-2.083 “Voucher scheme for a provision of services for information and communication technologies”"
        texts={[
          "“Rubber duck” Ltd. is a beneficiary of a grant agreement BG16RFOP002-2.083-0445-C01 and implements a project funded under the Operational Program “Innovation and Competitiveness” 2014-2020, under the procedure BG16RFOP002-2.083 “Voucher scheme for a provision of services for information and communication technologies”, with funds provided by European and National funding. The overall goal of this project, in which Rubber Duck Ltd. is a beneficiary, is to increase the capacity of micro, small and medium enterprises (SMEs) in terms of competitiveness and sustainability in dynamically developing markets, as well as to facilitate the main administrative and management activities in the company by implementing modern ICT solutions.",
          'Rubber duck Ltd. received support in the form of a voucher type 2 "Vouchers for and Communication Technology services to optimize management, production, and logistics processes”. The main goal is to develop a software solution that upgrades the existing internal management system. The new development and functionalities inside will optimize the administrative and management processes in the company. The total value of the voucher is BGN 20,000.00, of which BGN 17 000 European and BGN 3 000 National financing. The timeline for the implementation of the project activities is limited in the period: Start: December 1, 2020 End: September 1, 2021',
        ]}
        image={[Image2, Image1, Image3]}
      />

      <NewsSection
        title="Процедура BG16RFOP002-2.083"
        subtitle="Участие в процедура BG16RFOP002-2.083 „Схема на ваучер за предоставяне на услуги за информационни и комуникационни технологии“"
        texts={[
          "„Ръббър Дък“ ООД е бенефициент по договор за безвъзмездна финансова помощ BG16RFOP002-2.083-0445-C01 и изпълнява проект, финансиран по Оперативна програма „Иновации и конкурентоспособност“ 2014-2020 г., BG16RFOP002-2.083 „Схема на ваучер за провизия на услуги за информационни и комуникационни технологии ”, със средства, осигурени от европейско и национално финансиране. Общата цел на този проект, в който Ръббър Дък ООД е бенефициент, е да увеличи капацитета на микро, малки и средни предприятия (МСП) по отношение на конкурентоспособност и устойчивост на динамично развиващите се пазари, както и да облекчи основните административно-управленски дейности в компанията чрез имплементиране на съвременни решения.",
          "Rubber duck Ltd. получи подкрепа под формата на ваучер тип 2 „ИКТ услуги за оптимизиране на управленски, производствени и логистични процеси “. Основните цели са насочени към разработката на софтуерно решение, надграждащо съществуващата ИКТ система, чрез която ще бъдат оптимизирани административните и управленски процеси в компанията. Общата стойност на ваучера е 20 000,00 лв., от които 17 000 лв. европейско и 3 000 лв. национално финансиране. Сроковете за изпълнение на дейностите по проекта са ограничени в периода: Начало: 1 декември 2020 г. Край: 1 септември 2021 г.",
        ]}
        image={[Image2, Image1, Image3]}
        lineBreak={true}
      />

      <NewsSection
        title="Procedure BG16RFOP002-2.073"
        subtitle='Project "Overcoming the shortage of funds and lack of liquidity, which occurred as a result of the epidemic outbreak of COVID-19."'
        texts={[
          'On June 26, 2020, RUBBER DUCK LTD. signed a grant agreement with the Ministry of Economy under the project "Overcoming the shortage of funds and lack of liquidity, which occurred as a result of the epidemic outbreak of COVID-19." The project is implemented under the program "Innovation and Competitiveness" 2014-2020, project funding procedure BG16RFOP002-2.073 "Support to micro and small enterprises to overcome the economic consequences of the pandemic COVID-19".',
          "The financing amounts to BGN 10,000, 85% of which is from the EU, and 15% from the national budget of the Republic of Bulgaria. The purpose of the assistance is to provide operating capital for Bulgarian micro and small enterprises to deal with the consequences of the COVID-19 pandemic. The project will be implemented in the period 06/2020 - 09/2020 and will help meet the most urgent costs in the company's activities, to overcome the effects of the COVID-19 pandemic.",
        ]}
        image={[Image2, Image3]}
      />

      <NewsSection
        title="Процедура BG16RFOP002-2.073"
        subtitle="Проект „Преодоляване недостига на средства и липсата на ликвидност, настъпили в резултат от епидемичния взрив от COVID-19“."
        texts={[
          'На 26.06.2020 фирма "РЪББЪР ДЪК" ООД сключи договор за безвъзмездна финансова помощ с Министерство на икономиката по проект „Преодоляване недостига на средства и липсата на ликвидност, настъпили в резултат от епидемичния взрив от COVID-19“. Проектът се изпълнява по програма „Иновации и конкурентоспособност“ 2014-2020, процедура за финансиране на проекти BG16RFOP002-2.073 „Подкрепа на микро и малки предприятия за преодоляване на икономическите последствия от пандемията COVID-19“.',
          "Финансирането е в размер на 10 000 лв., 85 % от които от ЕС и 15 % от националния бюджет на Р България. Целта на помощта е осигуряване на оперативен капитал за българските микро и малки предприятия за справяне с последиците от пандемията COVID-19. Проектът ще се изпълни в периода 06/2020 – 09/2020 и ще спомогне за посрещане на най-неотложни разходи в дейността на дружеството, с оглед преодоляване на последиците от пандемията COVID-19.",
        ]}
        image={[Image2, Image3]}
      />
    </div>
  );
};

export default News;

const NewsSection = ({ title, subtitle, texts, image, lineBreak = false }) => {
  return (
    <div
      id="about"
      className={`max-w-6xl mx-auto mb-40  px-8 ${
        lineBreak ? "border-b-2 border-black pb-20" : ""
      }`}
    >
      <h2 className="text-center text-3xl md:text-5xl mb-7">{title}</h2>
      <div className="flex mx-auto max-w-3xl mt-12 mb-16 justify-between items-center">
        {image.map((item) => (
          <img className="w-auto h-14 md:h-20" src={item} alt="" />
        ))}
      </div>
      <div className="subtitle text-center text-xl mb-10">{subtitle}</div>

      <div className="wrapper flex gap-5 md:gap-10 flex-col md:flex-row">
        <div className="flex-1">{texts[0]}</div>
        <div className="flex-1">{texts[1]}</div>
      </div>
    </div>
  );
};
