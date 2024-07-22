
type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="  h-[273px] *:text-white *:text-[12px] *:leading-[25px] text-left bg-custom-footer">
      <div className=" flex justify-around h-[226px] w-[1020px] mx-auto">
        <div className="w-[300px] mt-[46px]">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
        <div className="w-[194px] mt-[20px]">
          <p className="text-[14px] font-medium">um</p>
          <p>Kontaktiere uns</p>
          <p>Über uns</p>
          <p>Karriere</p>
          <p>Unternehmensinformationen</p>
        </div>
        <div className="w-[194px] mt-[20px]">
          <p className="text-[14px] font-medium">Hilfe</p>
          <p>Unsere Produzenten</p>
          <p>Zahlung</p>
          <p>Versand</p>
          <p>Stornierung & Rückgabe</p>
          <p>Verstoß melden</p>
        </div>
        <div className="w-[194px] mt-[20px]">
          <p className="text-[14px] font-medium">pOLITIK</p>
          <p>Rücknahmegarantie</p>
          <p>Nutzungsbedingungen</p>
          <p>Sicherheit</p>
          <p>Privatsphäre</p>
          <p>Seitenverzeichnis</p>
        </div>
      </div>
      <div className="*:items-center *:text-white *:mt-[14px] h-[45px] bg-[#062F21] bottom-[218px] flex justify-around">
        <div>
          <p> 2023 hood.de , Inc.</p>
        </div>
        <div>
          <img src="src/assets/ft.png" alt="" />
        </div>
        <div>
          <p>Scroll to top </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
