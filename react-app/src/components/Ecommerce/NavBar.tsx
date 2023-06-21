interface Props {
  productCount: Number;
}

const NavBar = ({ productCount }: Props) => {
  return <div>NavBar {productCount.toString()}</div>;
};

export default NavBar;
