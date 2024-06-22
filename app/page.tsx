import Input from '@/components/input/Input';
import Card from '@/components/layout/card/Card';

export default function Home() {
  return (
    <Card>
      <h3>Card 1</h3>
      <Input type="email" name="email" placeholder="Email" />
    </Card>
  );
}
