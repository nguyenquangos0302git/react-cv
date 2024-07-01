import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const ServiceEnum = {
  PLEASE_SELECT: 'Please Select',
  BULK_BROADCAST: 'Bulk Broadcase',
  CHATBOT_AUTOMATION: 'Chatbox Automation',
  API_WEBHOOK_QUERIES: 'API & Webhook Queries (For Developers)',
  INTERGRATION: 'Intergration (For Developers)',
  TECHNICAL_IMPLEMENTATION: 'Technical Implementation (For Developers)',
  OTHER: 'Other',
};

const prefixNumberMapCountry = [
  {
    country: 'Vietnam (Việt Nam)',
    prefixNumber: '+84',
  },
  {
    country: 'United Kingdom',
    prefixNumber: '+44',
  },
];

const defaultValues = {
  name: '',
  email: '',
  service: ServiceEnum.PLEASE_SELECT,
  otherService: '',
  phoneNumber: '',
  country: prefixNumberMapCountry[0].country,
  prefixNumber: prefixNumberMapCountry[0].prefixNumber,
};

const schema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup
    .string()
    .required('Email is required')
    .email('Invalid email format'),
  service: yup
    .string()
    .required()
    .notOneOf(
      [ServiceEnum.PLEASE_SELECT],
      'Please complete this required field.'
    ),
  otherService: yup.string().when('service', {
    is: ServiceEnum.OTHER,
    then: (schema) => schema.required('Please complete this required field.'),
  }),
  phoneNumber: yup.string().required('Please complete this required field.'),
});

export default function Form() {
  const [isOtherService, setOtherService] = useState(() => {
    return defaultValues.service === ServiceEnum.OTHER;
  });

  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(schema),
  });

  const validForm = (data) => {
    console.log(data);
  };

  const errorForm = (error) => {
    console.log(error);
  };

  const handleOnChangeService = (service) => {
    clearErrors('service');
    const isUserSelectOtherService = service.target.value === ServiceEnum.OTHER;
    if (isUserSelectOtherService) {
      setOtherService(isUserSelectOtherService);
    } else {
      if (isOtherService) {
        setOtherService(isUserSelectOtherService);
        setValue('otherService', '');
      }
    }
  };

  const handleOnChangeCountry = (theCountry) => {
    const getPrefixNumber = prefixNumberMapCountry.filter((country) => {
      return country.country === theCountry.target.value;
    });
    setValue('prefixNumber', getPrefixNumber[0].prefixNumber);
  };

  return (
    <form noValidate onSubmit={handleSubmit(validForm, errorForm)}>
      <div>
        <label>Name *</label>
        <br />
        <input {...register('name')} />
        <br />
        <div style={{ color: 'red' }}>{errors.name?.message}</div>
      </div>
      <div>
        <label>Email *</label>
        <br />
        <legend>To book a 1-on-1 demo, please use your business email.</legend>
        <input {...register('email')} />
        <br />
        <div style={{ color: 'red' }}>{errors.email?.message}</div>
      </div>
      <div>
        <label>How can Wati help you? *</label>
        <br />
        <select
          {...register('service')}
          onChange={(service) => handleOnChangeService(service)}
        >
          {Object.entries(ServiceEnum).map(([key, value]) => {
            if (value === ServiceEnum.PLEASE_SELECT) {
              return (
                <option key={key} value={value} disabled>
                  {value}
                </option>
              );
            }
            return (
              <option key={key} value={value}>
                {value}
              </option>
            );
          })}
        </select>
        <br />
        <div style={{ color: 'red' }}>{errors.service?.message}</div>
      </div>
      {isOtherService && (
        <div>
          <label>Others - please share your use case *</label>
          <br />
          <legend>
            i.e. Automating notifications, CRM integration, OTP authentication,
            etc.
          </legend>
          <input {...register('otherService')} />
          <br />
          <div style={{ color: 'red' }}>{errors.otherService?.message}</div>
        </div>
      )}
      <div>
        <label>Phone Number *</label>
        <br />
        <select
          {...register('country')}
          onChange={(country) => handleOnChangeCountry(country)}
        >
          {prefixNumberMapCountry.map((country) => {
            return (
              <option key={country.country} value={country.country}>
                {country.country}
              </option>
            );
          })}
        </select>
        <br />
        <div style={{ color: 'red' }}>{errors.country?.message}</div>
      </div>
      <div>
        <br />
        <input {...register('prefixNumber')} disabled />
        <br />
        <input {...register('phoneNumber')} />
        <br />
        <div style={{ color: 'red' }}>{errors.phoneNumber?.message}</div>
      </div>
      <div>
        <input type='submit' />
      </div>
    </form>
  );
}
