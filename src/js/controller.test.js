import getModelStub from './model.stub'
import getViewStub from './view.stub'
import Controller from './controller'

describe('controller', () => {
  it('can be created', () => {
    const view = getViewStub()
    const model = getModelStub()
    const controller = new Controller(model, view)
    expect(controller).to.exist
  })
})

describe('test', () => {
  it('it works', () => {
    expect(true).to.be.true
  })
  it('it works again', () => {
    expect(false).to.be.false
  })
  it('really', () => {
    expect('hi').to.equal('hi')
  })
})
