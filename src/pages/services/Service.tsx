import React from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import Card from '../../common/components/card/Card';
import FeedbackForm from '../../common/components/feedback-form/FeedbackForm';
import Loading from '../../common/components/loading/Loading';
import NoData from '../../common/components/no-data/NoData';
import CivicCenterServiceContent from '../../common/components/service-content/ServiceContent';
import ShapeWrapper from '../../common/components/shape-wrapper/ShapeWrapper';
import { useService } from '../../services/service/Services.queries';

const Service = () => {
  const { t } = useTranslation('service_details')
  const { id } = useParams();
  const { data, isLoading, error, refetch } = useService(id as string);


  if (isLoading) {
    return (
      <ShapeWrapper>
        <Loading />
      </ShapeWrapper>
    );
  }

  if (error) {
    return (
      <ShapeWrapper>
        <NoData>{t('details.errors.get')}</NoData>
      </ShapeWrapper>
    );
  }

  return (
    <ShapeWrapper>
      <div className="xl:px-60 px-4 lg:pt-20 pt-10">
        <Card>
          {data && <CivicCenterServiceContent service={data} />}
        </Card>
      </div>
      <FeedbackForm />
    </ShapeWrapper>
  )
}

export default Service;