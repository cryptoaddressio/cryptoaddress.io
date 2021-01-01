export interface HeaderProps {
  title: string;
}

export const Header: React.FC = () => {
  return (
    <h1
      className="title"
      style={{ fontFamily: "Consolas", fontWeight: "lighter" }}
    >
      cryptoaddress.io
    </h1>
  );
};
