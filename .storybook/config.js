import {configure} from '@storybook/react';
import requireContext from 'require-context.macro';

configure(requireContext('../', true, /story.tsx$/), module);
