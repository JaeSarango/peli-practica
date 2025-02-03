import { Button, Form, Input, Row } from "antd";
import useMovies from "../hooks/useMovies";

const InputSearch = () => {
  const [form] = Form.useForm();
  const { getMovies } = useMovies();

  const handleSubmit = async (value) => {
    await getMovies(value.search);
  };

  return (
    <Row justify="center" className="p-4">
      <Form
        className="max-w-[800px] flex gap-x-4 my-10 item-center "
        form={form}
        onFinish={handleSubmit}
      >
        <Form.Item label="Search movie" name="search">
          <Input />
        </Form.Item>

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Buscar
          </Button>
        </Form.Item>
      </Form>
    </Row>
  );
};

export default InputSearch;
