import { Component } from 'react';
import {
  Card, CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card.tsx';
import { RadarChartCard } from '@/components/ui/radarchartcard.tsx';

interface Props {
}

interface State {
}

class DashboardLayout extends Component<Props, State> {
  render() {
    return (
      <>
        <div className="w-full pt-6 px-6 pb-2">
          <h2 className="text-2xl font-bold mb-4 text-left">Dashboard</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-6">
            <Card className="card-top-row border border-red-300 p-2 text-left">
              <div>
                <CardHeader>
                  <CardTitle>Total Solved</CardTitle>
                </CardHeader>
                <CardContent className="text-2xl font-bold">423</CardContent>
                <CardFooter className="text-xs text-muted-foreground">
                  80th Percentile
                </CardFooter>
              </div>
            </Card>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        <div className="w-full pt-2 px-6 pb-6">
          <div className="lg:col-span-6 grid grid-cols-3 gap-4" style={{gridTemplateColumns: '1fr 1fr 2fr'}}>
            <Card>
              Ranking Here
            </Card>
            <Card>
              <CardTitle>Recent Submissions Here</CardTitle>
            </Card>
            <RadarChartCard/>
            {/*<Card className="border border-red-300" />*/}

          </div>
        </div>
      </>
    );
  }
}

export default DashboardLayout;