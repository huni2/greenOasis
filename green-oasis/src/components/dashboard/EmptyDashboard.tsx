import Image from 'next/image';
import { Empty, Typography } from 'antd';
import { AppstoreAddOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

export default function EmptyDashboard() {
  return (
    <div className="dashboard-empty-section">
      <Empty
        image={<Image src="/images/add_widget.png" alt="위젯을 추가해주세요" width={200} height={200} />}
        description={
          <Typography>
            <Title level={3}>위젯을 추가해 주세요</Title>
            <Paragraph>
              우측 상단의 <AppstoreAddOutlined /> 위젯 추가 버튼을 클릭하여 위젯을 추가하시면 다양한 데이터를 조회하실 수 있습니다.
            </Paragraph>
          </Typography>
        }
      />
    </div>
  );
} 