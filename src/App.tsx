import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import TherapistAppComponent from './';
import TherapistConsultationScreenComponent from './ConsultationScreen';
import ChildInfoComponent from './ChildInfo';
import Account from '../common/Account';
import { Viewer_viewer } from '../../graphql/queries/types/Viewer';
import TherapistContext from './TherapistContext';


  return (
    <TherapistContext.Provider value={therapistContext}>
      <Switch>
        <Route path="/consultation/:id">
          <TherapistConsultationScreenComponent />
        </Route>
        <Route path="/child/:childId" render={() => <ChildInfoComponent />} />
        <Route path="/account" render={() => <Account user={user} />} />
        <Route path="/" render={() => <TherapistAppComponent therapistId={therapistId} />} />
      </Switch>
    </TherapistContext.Provider>
  );
};

export default TherapistRoutes;
