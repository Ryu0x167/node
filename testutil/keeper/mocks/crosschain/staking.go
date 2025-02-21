// Code generated by mockery v2.41.0. DO NOT EDIT.

package mocks

import (
	mock "github.com/stretchr/testify/mock"

	stakingtypes "github.com/cosmos/cosmos-sdk/x/staking/types"

	types "github.com/cosmos/cosmos-sdk/types"
)

// CrosschainStakingKeeper is an autogenerated mock type for the CrosschainStakingKeeper type
type CrosschainStakingKeeper struct {
	mock.Mock
}

// GetAllValidators provides a mock function with given fields: ctx
func (_m *CrosschainStakingKeeper) GetAllValidators(ctx types.Context) []stakingtypes.Validator {
	ret := _m.Called(ctx)

	if len(ret) == 0 {
		panic("no return value specified for GetAllValidators")
	}

	var r0 []stakingtypes.Validator
	if rf, ok := ret.Get(0).(func(types.Context) []stakingtypes.Validator); ok {
		r0 = rf(ctx)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).([]stakingtypes.Validator)
		}
	}

	return r0
}

// NewCrosschainStakingKeeper creates a new instance of CrosschainStakingKeeper. It also registers a testing interface on the mock and a cleanup function to assert the mocks expectations.
// The first argument is typically a *testing.T value.
func NewCrosschainStakingKeeper(t interface {
	mock.TestingT
	Cleanup(func())
}) *CrosschainStakingKeeper {
	mock := &CrosschainStakingKeeper{}
	mock.Mock.Test(t)

	t.Cleanup(func() { mock.AssertExpectations(t) })

	return mock
}
