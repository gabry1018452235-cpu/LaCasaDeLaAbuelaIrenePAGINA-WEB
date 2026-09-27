import React from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Link } from 'react-router-dom';

const LegalCheckbox = ({ value, onChange, required = true }) => {
  return (
    <div className="flex items-start space-x-3 py-4">
      <Checkbox
        id="legal-consent"
        checked={value}
        onCheckedChange={onChange}
        className="mt-1 border-oak"
      />
      <div className="grid gap-1.5 leading-relaxed">
        <Label
          htmlFor="legal-consent"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-oak"
        >
          He leído y acepto los{' '}
          <Link to="/terminos" className="text-terracotta underline hover:text-terracotta/80">
            Términos y Condiciones
          </Link>{' '}
          y la{' '}
          <Link to="/privacidad" className="text-terracotta underline hover:text-terracotta/80">
            Política de Privacidad
          </Link>.
        </Label>
      </div>
    </div>
  );
};

export default LegalCheckbox;
