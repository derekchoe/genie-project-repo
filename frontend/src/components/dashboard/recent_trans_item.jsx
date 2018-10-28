import React from 'react';
import Modal from 'react-modal';

const statusStyle = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

class RecentTransItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      successModalOpen: false
    };
    this._isMounted = false;
    this.openSuccessModal = this.openSuccessModal.bind(this);
    this.deleteTrans = this.deleteTrans.bind(this);
    this.closeSuccessModal = this.closeSuccessModal.bind(this);
  }

  componentDidMount() {
    this._isMounted = true;
  }

  deleteTrans(e) {
    e.preventDefault();
    const deletePromise = new Promise((resolve, reject) => {
      resolve(this.props.deleteTrans(this.props.tran._id));
    });
    deletePromise.then(() => {
      this.openSuccessModal();
      setTimeout(() => this.closeSuccessModal(), 2000);
    });
  }

  openSuccessModal() {
    if (this._isMounted) {
      this.setState({ successModalOpen: true });
    }
  }

  closeSuccessModal() {
    if (this._isMounted) {
      this.setState({ successModalOpen: false });
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const tran = this.props.tran;

    return (
      <div>
        <Modal
          isOpen={this.state.successModalOpen}
          onRequestClose={this.closeSuccessModal}
          contentLabel="Success Modal"
          style={statusStyle}
        >
          <div className="success-modal mod-positive">Deleted!</div>
        </Modal>
        <ul
          key={tran.id}
          className={tran.typeOfTrans === 'expense' ? 'negative' : 'positive'}
        >
          <li>{tran.description}</li>
          <li>{tran.date.slice(5, 10)}</li>
          <li>{tran.categoryName}</li>
          <li>${tran.amount}</li>
          <li className="delete-recent" onClick={this.deleteTrans}>
            Delete
          </li>
        </ul>
      </div>
    );
  }
}

export default RecentTransItem;
