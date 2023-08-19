import { Button } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import { CloseCircleTwoTone } from "@ant-design/icons";
export function Header() {
  return (
    <div>
      <Button ghost icon={<LeftOutlined />} />
      <div>Monday Oct 1 2023</div>
      <Button ghost>{">"}</Button>
    </div>
  );
}
