import { TextInput } from "react-native-paper";

interface PropTypes {
  label: string;
  value: string;
  affix?: string;
  onChange: (text: string) => void;
}

export default function CalcInput({
  label,
  value,
  affix,
  onChange,
}: PropTypes) {
  return (
    <TextInput
      label={label}
      value={value}
      onChangeText={onChange}
      right={<TextInput.Affix text={affix} />}
      keyboardType="numeric"
      style={{ marginBottom: 15 }}
    />
  );
}
