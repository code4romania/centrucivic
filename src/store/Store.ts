import create from 'zustand';
import { ISelectData } from '../common/helpers/Nomenclature.helper';
import { City } from '../common/interfaces/City.interface';
import { Domain } from '../common/interfaces/Domain.interface';
import { Faculty } from '../common/interfaces/Faculty.interface';
import { OrganizationFlat } from '../common/interfaces/OrganizationFlat.interface';
import { PaginatedEntity } from '../common/interfaces/PaginatedEntity.interface';
import { IService } from '../common/interfaces/Service.interface';
import { ServiceFilter } from '../common/interfaces/ServiceFilter.interface';
import { nomenclatureSlice } from './nomenclatures/Nomenclatures.slice';
import { organizationsSlice } from './organizations/Organizations.slice';
import { servicesSlice } from './services/Services.slice';

interface ServicesState {
  services: PaginatedEntity<IService> & { filters: ServiceFilter };
  setServices: (services: PaginatedEntity<IService>) => void;
  nextPageServices: () => void;
  updateServicesFilters: (
    search: string,
    organizationId: ISelectData,
    locationId: ISelectData,
    domains: ISelectData[],
    ageCategories: ISelectData[],
    start: string,
    end: string,
  ) => void;
}

interface OrganizationsState {
  organizations: PaginatedEntity<OrganizationFlat>;
  setOrganizations: (organizations: PaginatedEntity<OrganizationFlat>) => void;
}

interface NomenclatureState {
  cities: City[];
  domains: Domain[];
  faculties: Faculty[];
  setCities: (cities: City[]) => void;
  setDomains: (domains: Domain[]) => void;
  setFaculties: (faculties: Faculty[]) => void;
}


const useStore = create<ServicesState & NomenclatureState & OrganizationsState>()((set: any) => ({
  ...servicesSlice(set),
  ...nomenclatureSlice(set),
  ...organizationsSlice(set),
}));

export default useStore;
