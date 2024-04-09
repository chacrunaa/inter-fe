type MenuDataItemType = {
  name: string;
  to: string;
};

export type MenuDataType = {
  children?: MenuDataType[];
} & MenuDataItemType;
