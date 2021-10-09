import { Card, Row } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const { Meta } = Card;

const URL = "https://nikaws.cf/api/getlistlythuyet";

const Document = (props) => {
  const [documentList, setDocumentList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getListDocument = async () => {
      // await promise ?
      // asynchronous : callback - promise - async-await
      await axios
        .get(URL)
        .then(({ data }) => {
          setDocumentList(data);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    };
    getListDocument();
  }, []);

  return (
    <div className="container">
      {isLoading ? (
        <div> Loading ...</div>
      ) : (
        <Row  className="mt-3">
          {documentList.map((data) => (
            <div key={data.id} className="col-3 mb-4">
              <Card
                hoverable
                style={{ width: 240 }}
                cover={
                  <img
                    alt="example"
                    src="https://scontent.fhan14-2.fna.fbcdn.net/v/t1.15752-9/243801023_581083329607099_8089910565490544518_n.png?_nc_cat=103&ccb=1-5&_nc_sid=ae9488&_nc_ohc=IUjgeDofu8MAX-BvUn1&tn=25Hpisx_lsj3NqCj&_nc_ht=scontent.fhan14-2.fna&oh=38a94703973cbd685d0c33cf46dd93bc&oe=6179BED2 "
                  />
                }
              >
                <Link to={`/document/${data.id}`}>
                  <Meta title={data.ten_lythuyet} description="More" />
                </Link>
              </Card>
            </div>
          ))}
        </Row>
      )}
    </div>
  );
};

Document.propTypes = {};

export default Document;
