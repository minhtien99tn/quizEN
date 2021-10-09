import { Row, Typography } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const { Title } = Typography;

const URL = "https://nikaws.cf/api/getdetaillythuyetby";
const DetailDocument = (props) => {
  const { id } = useParams();
  const [data, setData] = React.useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getListDocument = async () => {
      await axios
        .get(`${URL}/${id}`)
        .then(({ data }) => {
          setData(data.detailLythuyet);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    };
    getListDocument();
  }, [id]);

  console.log(data);
  return (
    <div>
      <Row align="center">
        <Title>{data.ten_lythuyet}</Title>
      </Row>
      <Row align="center">
        <div dangerouslySetInnerHTML={{ __html: data.noidung_lythuyet }}></div>
      </Row>
    </div>
  );
};

DetailDocument.propTypes = {};

export default DetailDocument;
