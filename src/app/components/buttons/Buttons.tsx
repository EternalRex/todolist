interface IPrimaryButton {
  children: React.ReactNode;
}

interface ISecondaryButton {
  children: React.ReactNode;
}

export const PrimaryButton: React.FC<IPrimaryButton> = ({ children }) => {
  return (
    <button className="bg-appDarkBlue text-white w-24 h-8 rounded-lg font-appfontsPoppins">
      {children}
    </button>
  );
};

export const SecondaryButton: React.FC<ISecondaryButton> = ({ children }) => {
  return (
    <button className="bg-appDarkOrange text-white font-appfontsPoppins h-8 w-24 rounded-lg">
      {children}
    </button>
  );
};
